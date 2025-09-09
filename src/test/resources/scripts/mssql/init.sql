CREATE DATABASE dailyiu_backend_storage_database;
GO

USE dailyiu_backend_storage_database;
GO

-- Tabela principal de usuários
CREATE TABLE appUser (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL
);
GO

-- Tabela principal de questões com campos adicionais
CREATE TABLE question (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    externalId NVARCHAR(50),
    text NVARCHAR(MAX) NOT NULL,
    type NVARCHAR(10) NOT NULL,
    required BIT NOT NULL DEFAULT 0,
    placeholder NVARCHAR(255),
    minValue INT,
    maxValue INT,
    step INT
);
GO

-- Tabela para armazenar as opções das questões (para RADIO e CHECKBOX)
CREATE TABLE questionOption (
    id INT IDENTITY(1,1) PRIMARY KEY,
    questionId BIGINT,
    label NVARCHAR(255) NOT NULL,
    textValue NVARCHAR(50) NOT NULL,
    FOREIGN KEY (questionId) REFERENCES question(id)
);
GO

-- Tabela para armazenar registros para o diário miccional
CREATE TABLE calendarDay (
    id INT IDENTITY(1,1) PRIMARY KEY,
    dateValue DATE NOT NULL,
    userId BIGINT NOT NULL,
    leakageLevel NVARCHAR(20) NOT NULL,
    eventsCount INT NOT NULL DEFAULT 0,
    completedExercises INT NOT NULL DEFAULT 0,
    notesPreview NVARCHAR(MAX),
    dayTitle NVARCHAR(10) NOT NULL,
    FOREIGN KEY (userId) REFERENCES appUser(id)
);
GO

CREATE TABLE urinationData (
    id INT IDENTITY(1,1) PRIMARY KEY,
    calendarDayId INT NOT NULL,
    timeValue TIME NOT NULL,
    amount NVARCHAR(20) NOT NULL,
    leakage BIT NOT NULL DEFAULT 0,
    reason NVARCHAR(MAX),
    urgency BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (calendarDayId) REFERENCES calendarDay(id)
);
GO

-- Inserindo as questões
INSERT INTO question (externalId, text, type, required, placeholder, minValue, maxValue, step) VALUES
('birthdate', 'Qual sua data de nascimento?', 
    'DATE', 1, 'Dia / Mês / Ano', NULL, NULL, NULL);

INSERT INTO question (externalId, text, type, required) VALUES
('gender', 'Com qual gênero você se identifica?',
    'RADIO', 1);

INSERT INTO question (externalId, text, type, required) VALUES
('q3_frequency', 'Com que frequência você urina?',
    'RADIO', 1);

INSERT INTO question (externalId, text, type, required) VALUES
('q4_amount', 'Como você quantifica sua perda de urina?',
    'RADIO', 1);

INSERT INTO question (externalId, text, type, required, minValue, maxValue, step) VALUES
('q5_interference', 'Em geral, quanto que perder urina interfere em sua vida diária? (0 = não interfere, 10 = interfere muito)',
    'SLIDER', 1, 0, 10, 1);

INSERT INTO question (externalId, text, type, required) VALUES
('q6_when', 'Em que momentos você perde urina? (Assinale todas as alternativas que se aplicam a você)',
    'CHECKBOX', 1);
GO

-- Inserindo as opções para a questão de gênero
INSERT INTO questionOption (questionId, label, textValue) VALUES
((SELECT id FROM question WHERE externalId = 'gender'), 'Masculino', 'M'),
((SELECT id FROM question WHERE externalId = 'gender'), 'Feminino', 'F');
GO

-- Inserindo as opções para a questão de frequência
INSERT INTO questionOption (questionId, label, textValue) VALUES
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'Nunca', '0'),
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'Uma vez por semana ou menos', '1'),
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'Duas a três vezes por semana', '2'),
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'Uma vez ao dia', '3'),
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'Diversas vezes ao dia', '4'),
((SELECT id FROM question WHERE externalId = 'q3_frequency'), 'O tempo todo', '5');
GO

-- Inserindo as opções para a questão de quantidade
INSERT INTO questionOption (questionId, label, textValue) VALUES
((SELECT id FROM question WHERE externalId = 'q4_amount'), 'Nenhuma', '0'),
((SELECT id FROM question WHERE externalId = 'q4_amount'), 'Uma pequena quantidade', '2'),
((SELECT id FROM question WHERE externalId = 'q4_amount'), 'Uma quantidade moderada', '4'),
((SELECT id FROM question WHERE externalId = 'q4_amount'), 'Uma quantidade elevada', '6');
GO

-- Inserindo as opções para a questão de momentos
INSERT INTO questionOption (questionId, label, textValue) VALUES
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Nunca', '0'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Antes de chegar ao banheiro', '1'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Perco antes de terminar de urinar e/ou após urinar', '2'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Perco quando estou dormindo', '3'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Perco quando estou realizando atividades físicas', '4'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Perco quando terminei de urinar e estou vestindo', '5'),
((SELECT id FROM question WHERE externalId = 'q6_when'), 'Perco o tempo todo', '6');
GO

-- Inserindo usuários
INSERT INTO appUser (name) VALUES
('Usuário 1'),
('Usuário 2');

-- Inserindo dados do calendário
INSERT INTO calendarDay (dateValue, userId, leakageLevel, eventsCount, completedExercises, notesPreview, dayTitle) VALUES
('2025-06-01', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'LOW', 1, 1, 'Dia tranquilo.', 'seg'),
('2025-06-05', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'LOW', 1, 2, 'Pouca urgência.', 'qui'),
('2025-06-10', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'MEDIUM', 1, 0, NULL, 'ter'),
('2025-06-15', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'HIGH', 1, 3, 'Vazamento noturno.', 'dom'),
('2025-07-02', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'NONE', 0, 2, 'Sem eventos.', 'qua'),
('2025-07-08', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'LOW', 1, 1, NULL, 'ter'),
('2025-07-14', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'MEDIUM', 1, 2, 'Dia agitado.', 'seg'),
('2025-08-03', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'HIGH', 1, 0, 'Vazamento após café.', 'dom'),
('2025-08-10', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'NONE', 1, 1, NULL, 'dom'),
('2025-08-20', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'LOW', 1, 2, 'Pouca urgência.', 'qua'),
('2025-06-03', (SELECT id FROM appUser WHERE name = 'Usuário 2'), 'MEDIUM', 1, 1, 'Dia normal.', 'ter'),
('2025-07-05', (SELECT id FROM appUser WHERE name = 'Usuário 2'), 'HIGH', 1, 2, 'Vazamento noturno.', 'sab'),
('2025-07-18', (SELECT id FROM appUser WHERE name = 'Usuário 2'), 'NONE', 0, 1, NULL, 'sex'),
('2025-08-07', (SELECT id FROM appUser WHERE name = 'Usuário 2'), 'LOW', 1, 2, 'Pouca urgência.', 'qui'),
('2025-08-22', (SELECT id FROM appUser WHERE name = 'Usuário 2'), 'MEDIUM', 1, 0, NULL, 'sex'),
('2025-09-02', (SELECT id FROM appUser WHERE name = 'Usuário 1'), 'LOW', 1, 1, 'Dia tranquilo.', 'ter');
GO

-- Inserindo dados de urinação
INSERT INTO urinationData (calendarDayId, timeValue, amount, leakage, reason, urgency) VALUES
((SELECT id FROM calendarDay WHERE dateValue = '2025-06-01' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '12:30', 'LOW', 0, 'Almoço', 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-06-05' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '09:00', 'LOW', 0, NULL, 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-06-10' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '07:45', 'MEDIUM', 1, 'Acordou com urgência', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-06-15' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '23:30', 'HIGH', 1, 'Sono profundo', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-07-08' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '15:20', 'LOW', 0, 'Após exercício', 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-07-14' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '18:00', 'MEDIUM', 1, 'Trânsito', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-08-03' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '08:45', 'HIGH', 1, 'Café da manhã', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-08-10' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '11:00', 'NONE', 0, NULL, 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-08-20' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '14:30', 'LOW', 0, 'Almoço', 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-06-03' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 2')), '09:30', 'MEDIUM', 1, 'Trabalho', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-07-05' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 2')), '22:00', 'HIGH', 1, 'Sono profundo', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-08-07' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 2')), '13:00', 'LOW', 0, 'Almoço', 0),
((SELECT id FROM calendarDay WHERE dateValue = '2025-08-22' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 2')), '16:45', 'MEDIUM', 1, 'Trânsito', 1),
((SELECT id FROM calendarDay WHERE dateValue = '2025-09-02' AND userId = (SELECT id FROM appUser WHERE name = 'Usuário 1')), '18:42', 'LOW', 0, 'Cafézinho da tarde', 0);
GO