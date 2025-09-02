package br.ufpr.tads.daily_iu_services.adapter.input.calendar

import br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto.CalendarDayDTO
import br.ufpr.tads.daily_iu_services.domain.service.CalendarService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/calendar")
class CalendarController(private val calendarService: CalendarService) {

    @GetMapping
    fun getCalendarEvents(
        @RequestParam(required = false) from: String?,
        @RequestParam(required = false) to: String?,
        @RequestHeader(value = "usuario") userId: String
    ): ResponseEntity<HashMap<String, CalendarDayDTO>>{
        return ResponseEntity.ok(calendarService.getCalendarEvents(userId, from, to))
    }

    @PutMapping
    fun setCalendarEvent(){

    }
}