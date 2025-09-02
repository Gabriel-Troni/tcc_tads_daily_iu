package br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto

import br.ufpr.tads.daily_iu_services.domain.entity.calendar.UrinationData

data class CalendarDayDTO(
    val date: String,
    val leakageLevel: String,
    val eventsCount: Int,
    val completedExercises: Int,
    val notesPreview: String?,
    val urinationData: List<UrinationData>?,
    val dayTitle: String,
    var dayNumber: Int,
    var isToday: Boolean
)