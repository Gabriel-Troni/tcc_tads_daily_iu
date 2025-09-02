package br.ufpr.tads.daily_iu_services.domain.service

import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.CalendarDayDTO
import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.mapper.CalendarMapper
import br.ufpr.tads.daily_iu_services.adapter.output.CalendarRepository
import br.ufpr.tads.daily_iu_services.domain.entity.calendar.CalendarDay
import org.springframework.stereotype.Service
import java.time.LocalDate

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

}