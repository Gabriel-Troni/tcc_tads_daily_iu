package br.ufpr.tads.daily_iu_services.exception.domain

data class Message (
    val code: Int,
    val origin: String,
    val message: String,
    val details: String? = null
)