

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas (nome,cnpj)
VALUES ('Bradesco', 95694186000132),
    ('Vale', 2788714000146),
    ('Cielo', 01598317000134);


DESC prefeitos;
DESC empresas;

select * from empresas
select * from cidades

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES 
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

