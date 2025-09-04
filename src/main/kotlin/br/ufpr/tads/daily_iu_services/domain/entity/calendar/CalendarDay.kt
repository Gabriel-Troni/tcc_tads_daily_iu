package br.ufpr.tads.daily_iu_services.domain.entity.calendar

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId

@Document(collection = "calendar")
class CalendarDay(
    @MongoId
    val id: String? = null,
    val date: String,
    val userId: String,
    var leakageLevel: LeakageLevel,
    var eventsCount: Int,
    var completedExercises: Int,
    var notesPreview: String?,
    var urinationData: List<UrinationData>?,
    val dayTitle: String
)