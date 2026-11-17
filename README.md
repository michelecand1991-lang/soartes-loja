# SóArtes Design Gráfico

Vitrine pública com orçamento e fechamento manual pelo WhatsApp. Design azul, preto e cinza.

Hospedagem: Render Static Site (`public/`). Não incluir custos da FuturaIM, dados de clientes ou segredos.
# SóArtes — Dossiê de entrega do piloto e migração
Atualizado: 2026-11-16. **Estado contratual:** PILOTO de apresentação/homologação, sem mudança automática para planos pagos.
## Identificação técnica
- Projeto: **SóArtes**.
- Repositório fonte: `michelecand1991-lang/soartes-loja`.
- Branch: `main`.
- Diretório de código público: `public`.
- Endereço de demonstração: https://soartes-loja.onrender.com.
- Infraestrutura/dados: Banco e provedores externos: conferir configuração própria antes da migração..
- Observação importante: Código de produção pode depender de assets ou serviços não versionados; exportar cadastros/arte separadamente.
## Fechamento manual de pedidos

1. No WhatsApp oficial, confirme quantidades, acabamento, aprovação da arte, valor total com frete e prazo.
2. Envie o link do PagBank gerado para o valor combinado ou encaminhe os dados Pix da conta da loja.
3. Confira a aprovação no PagBank ou o crédito no extrato Pix antes de liberar a produção.
4. Registre o pedido e comunique ao cliente a confirmação e o envio pelo WhatsApp.

## Regra de independência
Este projeto tem lógica, apresentação, autorização de acesso e plano de migração próprios. O compartilhamento atual de banco, autenticação ou repositório é temporário; **não interpretar como isolamento de produção**. Não criar dependência direta de outras tabelas/módulos durante o piloto. O MICHELE OS poderá receber integrações controladas no futuro, não credenciais administrativas irrestritas.
## Entrega do código
O pacote ZIP de fonte inclui os arquivos disponíveis em `public` na branch indicada, este dossiê e um manifesto de versão. O código permanece versionado no GitHub. **O ZIP não é backup de banco, nem inclui dados pessoais, arquivos privados ou segredos.** Artefatos de GitHub Actions expiram; preservar uma cópia local fora do GitHub após cada entrega final.
### Para o profissional que receber o ZIP
1. Conferir o manifesto do commit, repositório, branch e lista completa dos arquivos.
2. Inspecionar HTML/CSS/JS e bibliotecas externas; não supor que as páginas demonstrativas tenham backend operacional.
3. Criar infraestrutura exclusiva: ambiente de homologação e produção, banco, Auth, Storage, serviço de e-mail, credenciais distintas, domínio/HTTPS e monitoramento.
4. Exportar **somente dados autorizados deste projeto**, respeitando LGPD, relacionamentos, RLS, funções, triggers, grants e políticas de Storage. Se a origem for banco compartilhado, nunca restaurar a cópia integral sobre o banco de outro produto.
5. Fazer a migração de contas/Auth com plano de comunicação e redefinição segura de acesso. **Não copiar senhas em texto ou por SQL improvisado.**
6. Substituir URLs/chaves públicas de Supabase somente após testar a nova instância. Guardar segredos no gerenciador da hospedagem, não em arquivos públicos ou neste ZIP.
7. Validar cadastros, aprovações, mídias, prazos, e-mails, pagamentos (se houver) e fluxo de exclusão de dados, em sessões reais separadas.
8. Comprovar cópias criptografadas em dois destinos independentes e **restauração testada** antes da migração definitiva.
9. Implantar por homologação -> piloto limitado -> produção, com janela de mudança, plano de reversão, comparação de dados e confirmação de aceite comercial.
10. Ao encerrar o piloto, guardar ZIP final, checklist, hashes, documentação de arquitetura e confirmação escrita do responsável técnico.
## Checklist para aceitação
- [ ] Frontend e backend operacionais em ambiente exclusivo.
- [ ] Autenticação, confirmação e recuperação de conta testadas.
- [ ] RLS/autorizações e escopos de administrador auditados.
- [ ] Contratos/pagamentos homologados quando aplicáveis.
- [ ] Termos, privacidade, consentimento e dados fiscais revisados.
- [ ] Backup duplo e restauração comprovados.
- [ ] Logs, alertas, disponibilidade e plano de suporte ativos.
- [ ] Exportação de dados e código-fonte entregues.
- [ ] Aprovação para sair do modo piloto registrada.
## Preservação
Não desligar, pausar, excluir ou migrar outras plataformas para separar este projeto. Não alterar configurações globais do Supabase compartilhado sem inventário das URLs, SMTP, quotas e usuários dos demais sites.

## Atendimento manual e frete

- Impressos comuns: cotar na FuturaIM com a configuração do produto e o CEP de destino. Confirmar a viabilidade na conta antes de oferecer envio direto.
- Kit com montagem em caixa presenteável: cotar FuturaIM até Araraquara e, à parte, repostagem de Araraquara ao cliente. Somar os dois trechos na linha de frete do orçamento e acrescentar o prazo de montagem. A mão de obra e os materiais da montagem pertencem ao custo do kit.
- Enviar as mensagens abaixo pela conversa oficial, preenchendo os campos para cada pedido.

**Aviso de cobrança** — Olá, [cliente]. O orçamento [referência] foi aprovado. Produtos e arte: R$ [valor]. Frete: R$ [valor]. Total: R$ [total]. Prazo combinado: [prazo]. Pagamento: [link PagBank ou dados Pix]. Avisaremos assim que conferirmos o recebimento.

**Confirmação do pedido** — Oi, [cliente]. Conferimos o pagamento de R$ [valor]. Seu pedido [referência] está confirmado. A arte está [status]. A previsão de despacho é [data]. Vamos atualizar você por aqui.

**Acompanhamento** — Pedido [referência], etapa atual: [em produção / em montagem / despachado / entregue]. Previsão atualizada: [data]. Rastreio, se disponível: [código ou link]. Se precisar falar com a SóArtes sobre a entrega, responda a esta mensagem.
