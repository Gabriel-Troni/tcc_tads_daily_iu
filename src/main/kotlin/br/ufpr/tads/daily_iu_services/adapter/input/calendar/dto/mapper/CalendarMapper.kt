package br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.mapper

import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.CalendarDayDTO
import br.ufpr.tads.daily_iu_services.domain.entity.calendar.CalendarDay
import org.mapstruct.AfterMapping
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.MappingTarget
import org.mapstruct.Named
import org.mapstruct.factory.Mappers
import java.time.LocalDate

@Mapper
abstract class CalendarMapper {

    companion object{
        val INSTANCE: CalendarMapper = Mappers.getMapper(CalendarMapper::class.java)
    }

    @Mapping(target = "date", source = "date")
    @Mapping(target = "leakageLevel", expression = "java(calendar.getLeakageLevel().toString())")
    @Mapping(target = "dayNumber", constant = "1")
    @Mapping(target = "isToday", constant = "false")
    abstract fun calendarDaytoDTO(calendar: CalendarDay): CalendarDayDTO

    @AfterMapping
    fun calendarDTOAfterMapping(@MappingTarget calendarDTO: CalendarDayDTO){
        val date: LocalDate = LocalDate.parse(calendarDTO.date)
        val today: LocalDate = LocalDate.now()
        calendarDTO.dayNumber = date.dayOfMonth
        calendarDTO.isToday = date.isEqual(today)
    }
}