SELECT * FROM estados

SELECT sigla, nome as 'Nome do Estado' from estados
where regiao='Sul'

SELECT nome, regiao, populacao from estados
WHERE populacao >= 10
order by populacao desc

