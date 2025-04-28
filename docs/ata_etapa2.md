# Etapa 2: Tarefas Realizadas por Cada Membro
Antonio Rubens Oliveira Junqueira
Após a aula inicial da Etapa 2, o grupo foi dividido em duas frentes: serviços on premises e cloud. Fiquei alocado na parte de serviços on premises, com a responsabilidade sobre DNS, DHCP e LDAP. Para facilitar a comunicação entre os integrantes, o colega Sávio criou um grupo no WhatsApp chamado “Temporário”, onde ele e Denis compartilharam diversos materiais de apoio, dicas e orientações. Denis, em especial, me auxiliou bastante durante o período, realizando reuniões via Teams (Canvas) até mesmo durante a madrugada, além de me ajudar a obter o Windows 10 necessário para a instalação dos sistemas.
Iniciei minhas atividades instalando o VirtualBox, seguido pelas instalações do Ubuntu Server e do Windows Server. Paralelamente, comecei a estudar os microfundamentos e o material de apoio disponibilizado, focando principalmente nos conteúdos relacionados aos serviços que eu estava encarregado. Apesar do empenho, enfrentei algumas dificuldades. A primeira foi a falta de experiência com o ambiente Linux e o trabalho em linha de comando. Outra dificuldade ocorreu durante a configuração dos serviços, pois a interface de rede enp0s8 não subia automaticamente, o que me levou a aprender a configurar o Netplan manualmente, com o auxílio da inteligência artificial e dos colegas.
Durante a resolução desse problema, identifiquei que o arquivo de configuração do Netplan estava mal estruturado e precisei reescrevê-lo completamente. Além disso, tive que aprender a utilizar editores de texto como nano e vim, que eram necessários para as edições. Com a rede configurada corretamente, consegui avançar na instalação e configuração dos serviços DNS e DHCP no Ubuntu Server. Ao final, realizei testes práticos entre o servidor Ubuntu e o servidor Windows para garantir que todos os serviços estivessem funcionando conforme o esperado.
 
Denis Alves da Silva Leite:

- Participei no princípio do grupo do servidor da nuvem, porém, mudei para o serviço local.
- Comecei meu trabalho na parte do servidor local no grupo temporário.
- Configurei o VirtualBox para instalar:
  - Ubuntu Server
  - Windows 10 (como cliente)
- Instalei e configurei o DHCP, utilizando o ISC DHCP Server.
- Instalei e configurei o DNS, utilizando o Bind9.
- Instalei e configurei o LDAP, utilizando o OpenLDAP.
- Testei todas as configurações no Windows 10, funcionando perfeitamente.
- Contribuí ajudando outros integrantes do grupo nas configurações.

Sávio Sérgio Pereira da Silva:

- Grupo de rede local;
- Instalação da virtualização Virtualbox com a segmentação de redes A, B e C para Alunos, funcionários e Servidores;
- Trabalhei na instalação dos seguintes serviços no local: No Windows Server foram DNS e AD DS, no Ubuntu Server foram o roteamento entre as máquinas e o serviço de DHCP e instalação de duas máquinas cliente com Windows 10 Pro;
- Gravei o video demostrando as instalações;
- Revisei os documentos.

Laís Lara Ferreira dos Santos

- Participei do subgrupo responsável pela configuração de serviços de rede e servidores na AWS;
- Criação de duas instâncias no EC2 da AWS com o sistema operacional Ubuntu;
- Configuração dos grupos de segurança das instâncias;
- Estudo, instalação e configuração dos seguintes serviços nas máquina virtuais da AWS:
   - Servidor Web (Apache)
   - FTP (utilizando Filezilla)
   - DNS
   - Banco de Dados (PostgreSQL)
   - NFS (servidor e cliente)
   - Proxy e Cache
- Gravação dos videos de demostração e testes das máquinas virtuais na nuvem;
- Revisão dos documentos da entrega 2.

Beatriz Pereira da Costa

- Participei do subgrupo responsável pela configuração de serviços de rede e servidores na AWS.
- Trabalhei na instalação e configuração do **BIND9** para o serviço DNS, criando as zonas e realizando testes para garantir que a configuração estava correta.
- Configurei o **Squid** como servidor proxy na AWS, realizando a instalação e configuração para permitir tráfego de rede e controlar o acesso por IPs.
- Implementei a configuração de **Cache** no **Squid**, otimizando a rede para armazenar conteúdos frequentemente acessados e melhorar a performance.
- Configurei o **NFS** entre duas instâncias EC2 na AWS, configurando tanto o servidor NFS quanto a máquina cliente para o compartilhamento de arquivos.
- Instalei e configurei o **PostgreSQL**, criando bancos de dados e usuários com permissões específicas para manipulação e acesso aos dados.
- Instalei e configurei o **vsftpd** para permitir a transferência de arquivos via FTP, criando usuários e liberando as portas necessárias no firewall da AWS.
- Implementei a infraestrutura de **Servidor Web** na AWS, criando instâncias EC2, instalando o Apache, configurando o acesso SSH e realizando testes de conexão ao servidor web.

Arthur Neves da Silveira

- Participante do grupo de rede local;
- Instalei o Virtualbox e configurei: 
  - Ubuntu Server: Instalção e configuração de pacotes de rede e serviços DHCP;
  - Windows Server 2019: Instalação e configuração de serviço de DNS;
  - Windows 10 Pro: Teste de Máquinas clientes e configuração de rede e domínio;
- Redigi partes dos processos no documento de entrega;

