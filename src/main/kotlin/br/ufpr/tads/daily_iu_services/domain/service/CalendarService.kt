package br.ufpr.tads.daily_iu_services.domain.service

import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.CalendarDayDTO
import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.CalendarRequestDTO
import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.mapper.CalendarMapper
import br.ufpr.tads.daily_iu_services.adapter.output.CalendarRepository
import br.ufpr.tads.daily_iu_services.domain.entity.calendar.CalendarDay
import br.ufpr.tads.daily_iu_services.domain.entity.calendar.LeakageLevel
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.time.format.TextStyle
import java.util.*

@Service
class CalendarService(private val calendarRepository: CalendarRepository) {

    fun getCalendarEvents(userId: String, from: String?, to: String?): HashMap<String, CalendarDayDTO> {
        val calendarEvents: List<CalendarDay> =
            if (from != null && to != null) {
                calendarRepository.findByDateRangeAndUserId(from, to, userId)
            } else {
                val currentDate = LocalDate.now()
                calendarRepository.findByMonthAndUserId(currentDate.monthValue.toString(), userId)
            }

        return calendarEvents.map { CalendarMapper.INSTANCE.calendarDaytoDTO(it) }
            .associateBy { it.date } as HashMap<String, CalendarDayDTO>
    }

    fun createOrUpdateEvent(userId: String, request: CalendarRequestDTO): CalendarDayDTO {
        var event: CalendarDay? = calendarRepository.findByDateAndUserId(request.date, userId)

        if (event == null) {
            val level = LeakageLevel.from(request.leakageLevel)
            val date = LocalDate.parse(request.date)
            val dayTitle = date.getDayOfWeek()
                .getDisplayName(TextStyle.FULL, Locale("pt", "BR")).subSequence(0, 3).toString()

            event = CalendarDay(
                date = request.date,
                userId = userId,
                leakageLevel = level,
                eventsCount = request.urinationData?.size ?: 0,
                completedExercises = 0,
                notesPreview = request.notesPreview,
                urinationData = request.urinationData,
                dayTitle = dayTitle
            )
        } else {
            request.urinationData?.let {
                event.urinationData = it
                event.eventsCount = it.size
            }
        }

        calendarRepository.save(event)

        return CalendarMapper.INSTANCE.calendarDaytoDTO(event)
    }
}