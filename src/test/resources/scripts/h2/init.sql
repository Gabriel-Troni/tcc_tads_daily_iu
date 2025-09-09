-- Tabela principal de usuários
CREATE TABLE appUser (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabela principal de questões com campos adicionais
CREATE TABLE question (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    externalId VARCHAR(50),
    text VARCHAR(10000) NOT NULL,
    type VARCHAR(10) NOT NULL,
    required BOOLEAN NOT NULL DEFAULT FALSE,
    placeholder VARCHAR(255),
    minValue INT,
    maxValue INT,
    step INT
);

-- Tabela para armazenar as opções das questões (para RADIO e CHECKBOX)
CREATE TABLE questionOption (
    id INT AUTO_INCREMENT PRIMARY KEY,
    questionId BIGINT,
    label VARCHAR(255) NOT NULL,
    textValue VARCHAR(50) NOT NULL,
    FOREIGN KEY (questionId) REFERENCES question(id)
);

-- Tabela para armazenar registros para o diário miccional
CREATE TABLE calendarDay (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateValue DATE NOT NULL,
    userId BIGINT NOT NULL,
    leakageLevel VARCHAR(20) NOT NULL,
    eventsCount INT NOT NULL DEFAULT 0,
    completedExercises INT NOT NULL DEFAULT 0,
    notesPreview VARCHAR(10000),
    dayTitle VARCHAR(10) NOT NULL,
    FOREIGN KEY (userId) REFERENCES appUser(id)
);

CREATE TABLE urinationData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    calendarDayId INT NOT NULL,
    timeValue TIME NOT NULL,
    amount VARCHAR(20) NOT NULL,
    leakage BOOLEAN NOT NULL DEFAULT FALSE,
    reason VARCHAR(10000),
    urgency BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (calendarDayId) REFERENCES calendarDay(id)
);
