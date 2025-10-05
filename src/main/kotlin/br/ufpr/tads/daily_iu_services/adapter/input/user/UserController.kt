package br.ufpr.tads.daily_iu_services.adapter.input.user

import br.ufpr.tads.daily_iu_services.adapter.input.user.dto.ChangePasswordDTO
import br.ufpr.tads.daily_iu_services.adapter.input.user.dto.LoginRequestDTO
import br.ufpr.tads.daily_iu_services.adapter.input.user.dto.LoginResponseDTO
import br.ufpr.tads.daily_iu_services.domain.service.UserService
import jakarta.validation.Valid
import jakarta.validation.constraints.Email
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v1/users")
class UserController(private val userService: UserService) {

    @PostMapping
    fun createUser() {
        TODO("Not yet implemented")
    }

    @PostMapping("/login")
    fun login(@RequestBody @Valid request: LoginRequestDTO): ResponseEntity<LoginResponseDTO> {
        return ResponseEntity.ok(userService.login(request))
    }

    @PostMapping("/password/forgot")
    fun resetPassword(@RequestHeader("x-user-email") @Email email: String): ResponseEntity<Void> {
        userService.sendEmailOTP(email)
        return ResponseEntity.noContent().build()
    }

    @PostMapping("/password/reset")
    fun changePassword(@RequestBody @Valid request: ChangePasswordDTO): ResponseEntity<Void> {
        userService.resetPassword(request)
        return ResponseEntity.noContent().build()
    }
}