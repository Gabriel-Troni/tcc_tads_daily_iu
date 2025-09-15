package br.ufpr.tads.daily_iu_services.exception.handler

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.multipart.MaxUploadSizeExceededException

@ControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(MaxUploadSizeExceededException::class)
    fun handleMaxSizeException(ex: MaxUploadSizeExceededException?): ResponseEntity<String?> {
        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
            .body<String?>("Arquivo excede o tamanho permitido.")
    }
}