UPDATE estados SET nome = 'Maranhão'
WHERE sigla ='MA'

select est.nome from estados est where sigla ='MA'

UPDATE estados SET nome='Paraná', populacao = 11.32
where sigla='PR'

select nome, sigla, populacao from estados 
WHERE sigla='PR'