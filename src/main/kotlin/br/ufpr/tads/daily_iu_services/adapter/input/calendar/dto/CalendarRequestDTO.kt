package br.ufpr.tads.daily_iu_services.adapter.input.calendar.dto

import br.ufpr.tads.daily_iu_services.domain.entity.calendar.UrinationData
import br.ufpr.tads.daily_iu_services.domain.validator.ValidDate

data class CalendarRequestDTO(
    @ValidDate
    val date: String,
    val leakageLevel: String,
    val notesPreview: String?,
    val urinationData: List<UrinationData>?
)