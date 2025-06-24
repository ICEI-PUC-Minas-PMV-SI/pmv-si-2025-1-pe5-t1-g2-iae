[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9lYuEWwT)
# Projeto de Infraestrutura de Redes do Instituto Acadêmico de Excelência (IAE) – Sede e Campi Metropolitanos

`CURSO: Sistemas de Informação`

`DISCIPLINA: Projeto - Projeto de Infraestrutura`

`Eixo: 5`

Desenvolvimento da infraestrutura de redes do Instituto Acadêmico de Excelência (IAE), uma universidade com sede em Belo Horizonte (MG) e três campi na região metropolitana.

## 👥 Autores
Este projeto foi desenvolvido por uma equipe de alunos de graduação em Sistemas de Informação no 5º Eixo do curso e pela PUC Minas Virtual.

* Antônio Rubens Oliveira Junqueira
* Arthur Neves da Silveira
* Beatriz Pereira da Costa
* Denis Alves da Silva Leite
* Laís Lara Ferreira dos Santos
* Sávio Sérgio Pereira da Silva

## 👨‍🏫 Orientador
Este projeto foi orientado pelo professor:
* Fábio Leandro Rodrigues Cordeiro

## 🚀 Visão Geral do Projeto
O objetivo central do projeto foi **planejar e implementar uma infraestrutura de rede segura e eficiente** para o Instituto Acadêmico de Excelência (IAE). A IAE é uma instituição de ensino com **quatro campi em Belo Horizonte e região metropolitana**, atendendo a um total de **5.760 alunos, 185 professores e 156 funcionários**.
A iniciativa buscou criar um ambiente de TI estável e seguro, integrando serviços acadêmicos e administrativos por meio de soluções tecnológicas avançadas. Isso incluiu:
*   **Planejamento físico e lógico da rede**.
*   **Virtualização de servidores locais**.
*   **Implantação de serviços na nuvem**.
*   Utilização de **ferramentas de monitoramento** (como Zabbix).
*   Adoção de **práticas de segurança da informação** para proteger os dados institucionais.

## 🌐 Arquitetura da Rede
A **topologia em estrela** foi a escolha para a rede do IAE. Essa abordagem conecta todos os dispositivos (computadores, switches e roteadores) a um **switch principal central**.

**As principais razões para a escolha da topologia em estrela foram:**

*   **Simplicidade de Administração e Manutenção**: Facilita o gerenciamento da rede.
*   **Isolamento de Falhas**: Se um dispositivo apresentar problemas, ele não afeta a comunicação das outras estações.
*   **Escalabilidade**: Permite a adição fácil de novos computadores ou dispositivos.

Um protótipo detalhado da rede foi desenvolvido no **Cisco Packet Tracer** para simular o tráfego de dados e o comportamento da rede em diferentes cenários. O projeto também incluiu a elaboração de **planilhas de equipamentos** e **endereçamento de IPs** para todos os campi.

## ⚙️ Serviços e Ambientes Implementados

O projeto envolveu a configuração e integração de diversos serviços essenciais, tanto em máquinas virtuais locais quanto em instâncias na nuvem AWS.

### Ambiente Local (Virtualização via VirtualBox)

Foram criadas máquinas virtuais para segmentar a rede e gerenciar os diferentes níveis de acesso (alunos, administrativos e servidores).

*   **Servidor DHCP**: Atribui automaticamente endereços IP e configurações de rede para as máquinas clientes.
*   **Servidor DNS**: Resolve nomes de domínios para endereços IP, facilitando o acesso a recursos internos.
*   **Servidor LDAP**: Gerencia a autenticação, organização e controle de usuários e grupos na rede, como alunos, professores e funcionários.

### Ambiente na Nuvem (AWS EC2)

Instâncias EC2 foram utilizadas para hospedar serviços críticos, garantindo alta disponibilidade e escalabilidade.

*   **Servidor Web (Apache2)**: Responsável pela hospedagem de páginas e aplicações web da universidade.
*   **Serviço de Banco de Dados (PostgreSQL)**: Utilizado pelos sistemas da universidade (biblioteca, matrícula, finanças) para armazenar e gerenciar dados.
*   **Servidor DNS**: Resolve nomes de domínios para endereços IP, facilitando o acesso a recursos internos.
*   **Serviço de FTP (vsftpd)**: Usado para compartilhamento e transferência de materiais acadêmicos, backups e outras informações.
*   **Serviço NFS (Network File System)**: Compartilha diretórios e arquivos entre servidores e computadores, centralizando o armazenamento de conteúdos acadêmicos.
*   **Servidor Proxy e Cache (Squid)**: Filtra e controla o acesso à internet, bloqueando conteúdos inadequados e otimizando o tráfego de rede, além de armazenar cópias de conteúdos frequentemente acessados para acelerar o acesso.

## 📊 Gerência e Monitoramento com Zabbix

O monitoramento contínuo foi uma etapa fundamental do projeto para garantir o desempenho e a estabilidade da infraestrutura. O **Zabbix** foi a ferramenta escolhida para monitorar tanto os serviços locais quanto os da nuvem.

*   **Monitoramento Local**: Acompanhamento da utilização de CPU, memória, tráfego de rede e ocupação de disco dos servidores DHCP, DNS e LDAP. Os resultados mostraram que esses serviços operam de forma estável e eficiente.
*   **Monitoramento na Nuvem**: A instância EC2 que hospeda o servidor web foi monitorada detalhadamente. Os gráficos de **Utilização do CPU, Carregamento do Sistema, Utilização de Disco, Uso da Memória e Tráfego de Rede** indicaram um bom desempenho e estabilidade operacional, com a instância operando dentro dos parâmetros aceitáveis.

## 🔒 Mecanismos de Segurança da Informação

A segurança da informação foi abordada de forma abrangente, com a implementação de políticas e a análise de vulnerabilidades.

*   **Política de Segurança da Informação (PSI)**: Documento essencial que define diretrizes para a proteção dos ativos digitais da IAE, baseada na norma **ISO/IEC 27001** e alinhada com a legislação brasileira (Decreto nº 9.637/2018 e LGPD).
*   **Cartilha de Boas Práticas de Acesso Seguro**: Material educativo que orienta a comunidade acadêmica sobre comportamentos seguros no uso dos recursos de TI, promovendo a conscientização e a responsabilidade individual.
*   **Análise de Vulnerabilidades (OWASP Top 10)**: Foram identificados e detalhados os três principais riscos de segurança relevantes para os serviços web da instituição, juntamente com as ações recomendadas para mitigá-los:
    *   **A01:2017 - Injection (Injeção de Comandos)**: Risco de manipulação de dados em sistemas que interagem com bancos de dados (como SQL Injection e LDAP Injection). **Recomendações**: Validação rigorosa de entradas de dados, higienização de caracteres especiais e uso de consultas parametrizadas.
    *   **A02:2017 - Broken Authentication (Autenticação Quebrada)**: Falhas na implementação de autenticação que podem levar a acessos indevidos ou elevação de privilégios. **Recomendações**: Uso de protocolos seguros (HTTPS/LDAPS), políticas de senhas fortes, gestão adequada de sessões, armazenamento seguro de credenciais e proteção contra ataques de força bruta.
    *   **A06:2017 - Security Misconfiguration (Configuração Incorreta de Segurança)**: Erros de configuração em diversos serviços que podem expor dados ou permitir acesso não autorizado. **Recomendações**: Revisão de configurações padrão, desativação de serviços desnecessários, uso de criptografia, controle rigoroso de acesso remoto, manutenção de sistemas atualizados e correção de permissões em arquivos e pastas.

## ✅ Conclusão

A solução de infraestrutura de rede desenvolvida para o IAE é **tecnicamente sólida, escalável e segura**, demonstrando a capacidade de atender às demandas atuais da instituição e de se adaptar a futuras necessidades. O projeto enfatiza a importância de um planejamento estruturado, da configuração precisa dos serviços e da gestão contínua do ambiente de rede para garantir a eficiência operacional e a proteção dos dados em um ambiente acadêmico complexo.
