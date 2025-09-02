package br.ufpr.tads.daily_iu_services.domain.entity.calendar

class UrinationData(
    val time: String,
    val amount: LeakageLevel,
    val leakage: Boolean,
    val reason: String?,
    val urgency: Boolean?
)