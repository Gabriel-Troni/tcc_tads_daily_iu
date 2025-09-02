package br.ufpr.tads.daily_iu_services.domain.entity.calendar

enum class LeakageLevel(val value: String) {
    NONE("NONE"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH");

    override fun toString(): String {
        return value
    }
}