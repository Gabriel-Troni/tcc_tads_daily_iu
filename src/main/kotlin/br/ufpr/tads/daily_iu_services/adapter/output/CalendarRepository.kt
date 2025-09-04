package br.ufpr.tads.daily_iu_services.adapter.output

import br.ufpr.tads.daily_iu_services.domain.entity.calendar.CalendarDay
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CalendarRepository : MongoRepository<CalendarDay, String> {

    @Query("{ 'date': { \$regex: ?0 }, 'userId': ?1 }")
    fun findByMonthAndUserId(monthRegex: String, userId: String): List<CalendarDay>

    @Query("{ 'date': { \$gte: ?0, \$lte: ?1 }, 'userId': ?2 }")
    fun findByDateRangeAndUserId(startDate: String, endDate: String, userId: String): List<CalendarDay>

    fun findByDateAndUserId(date: String, userId: String): CalendarDay?
}