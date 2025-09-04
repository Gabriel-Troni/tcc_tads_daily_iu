package br.ufpr.tads.daily_iu_services.domain.validator;

    import jakarta.validation.ConstraintValidator;
    import jakarta.validation.ConstraintValidatorContext;

    import java.time.LocalDate;
    import java.time.format.DateTimeFormatter;
    import java.time.format.DateTimeParseException;

    public class ValidDateImpl implements ConstraintValidator<ValidDate, String> {

        private boolean required = true;
        private static final DateTimeFormatter OUTPUT_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        @Override
        public void initialize(ValidDate constraintAnnotation) {
            ConstraintValidator.super.initialize(constraintAnnotation);
            this.required = constraintAnnotation.required();
        }

        @Override
        public boolean isValid(String input, ConstraintValidatorContext context) {
            if (input == null || input.isEmpty()) {
                return !this.required;
            }

            try {
                LocalDate date = LocalDate.parse(input);
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate(date.format(OUTPUT_FORMAT)).addConstraintViolation();
                return true;
            } catch (DateTimeParseException e) {
                return false;
            }
        }
    }