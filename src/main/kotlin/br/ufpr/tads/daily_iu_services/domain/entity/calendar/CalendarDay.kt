package br.ufpr.tads.daily_iu_services.domain.entity.calendar

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId

@Document(collection = "calendar")
class CalendarDay(
    @MongoId
    val id: String,
    val date: String,
    val userId: String,
    val leakageLevel: LeakageLevel,
    val eventsCount: Int,
    val completedExercises: Int,
    val notesPreview: String?,
    val urinationData: List<UrinationData>?,
    val dayTitle: String
)