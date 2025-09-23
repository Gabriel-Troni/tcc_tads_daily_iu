package br.ufpr.tads.daily_iu_services.adapter.input.content

import br.ufpr.tads.daily_iu_services.adapter.input.content.dto.CommentDTO
import br.ufpr.tads.daily_iu_services.domain.service.ContentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/content/comments")
class CommentController(private val service: ContentService) {

    @PostMapping
    fun createComment(): ResponseEntity<CommentDTO> {
        TODO("Not yet implemented")
    }

    @PutMapping("/{id}")
    fun updateComment(): ResponseEntity<CommentDTO> {
        TODO("Not yet implemented")
    }

    @GetMapping("/{id}")
    fun getCommentReplies(): ResponseEntity<List<CommentDTO>> {
        TODO("Not yet implemented")
    }

    @PatchMapping("/{id}")
    fun likeComment(): ResponseEntity<Void> {
        TODO("Not yet implemented")
    }

    @DeleteMapping("/{id}")
    fun deleteComment(): ResponseEntity<Void> {
        TODO("Not yet implemented")
    }
}