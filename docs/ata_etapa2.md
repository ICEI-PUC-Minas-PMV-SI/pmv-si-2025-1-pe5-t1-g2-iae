# Etapa 2: Tarefas Realizadas por Cada Membro
Antonio Rubens Oliveira Junqueira
 Após a aula inicial da etapa 2, o grupo criou a separação entreserviços on premises e cloud, onde eu fiquei alocada nos serviços on premises, nosso grupo teve como demandas os serviços de DNS, DHCP e LDAP e então o Sávio criou um grupo de Whatsapp do sub-grupo como denominação Temporário para alinhar as informações e duvidas mais dedicadas.
O Sávio e o Denis divulgaram muito material de apoio e dicas, trocaram muitas informações no grupo, Denis me ajudou bastante durante esse período, pois tivemos algumas reuniões via teams do Canvas que entraram na madrugada para me ajudar com algumas dúvidas e também a conseguir o Windows 10 para que pudesse fazer a instalação.
Para iniciar minhas atividades eu trabalhei na instalação do virtual box, Ubuntu server e o Windows Server e iniciei minhas atividades dos microfundamentos e estudar os materiais de apoio fornecidos na etapa assistindo todas as aulas principalmente as dos serviços que eu estava alocado, infelizmente o microfundamento extra não subiu a tempo. Após as instalações comecei a seguir as instruções dos vídeos nas instalações, mas tive duas grandes dificuldade, a primeira por nunca ter aprendido a usar Linux e trabalhar com comandos em linhas e a outra dificuldade surgiu nas instalações dos serviços, pois o tive muitas dificuldades para subir o enp0s8, configurar as zonas para permitir o domínio aparecer, configurações do DHCP sumiram ou sempre saiam de formatação no sistema e tudo mais que poderia acontecer.
Aprendi muito e na marra com  a ajuda principalmente do Denis e dos Savio além de muitas horas de IA para aprender os comando e analisar os erros que foram surgindo.
Especificamente no problema do enp0s8 eu descobri que o arquivo Netplan que configura o  Bind9 não estava devidamente pautado e configurado, por motivo que desconheço e foi necessário reescrever com ajuda da IA, outra dificuldade foi aprender usar o nano ou o VIM.
Após configurar o DNS eu segui para a configuração do DHCP que foi outra luta que tive para configurar os limites de rede, depois disso consegui fazer o Ubuntu pingar no Windows Server e o inverso e conseguir fazer o Windows server enxergar o servidor Ubuntu.
Foram configurados o Firewall que me atrapalho bastante na comunicação das maquinas na porta 53, o postgra e também o LDAP, mas esta não está concluído ainda.
 
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

# Beatriz Pereira da Costa

- Participei do subgrupo responsável pela configuração de serviços de rede e servidores na AWS.
- Trabalhei na instalação e configuração do **BIND9** para o serviço DNS, criando as zonas e realizando testes para garantir que a configuração estava correta.
- Configurei o **Squid** como servidor proxy na AWS, realizando a instalação e configuração para permitir tráfego de rede e controlar o acesso por IPs.
- Implementei a configuração de **Cache** no **Squid**, otimizando a rede para armazenar conteúdos frequentemente acessados e melhorar a performance.
- Configurei o **NFS** entre duas instâncias EC2 na AWS, configurando tanto o servidor NFS quanto a máquina cliente para o compartilhamento de arquivos.
- Instalei e configurei o **PostgreSQL**, criando bancos de dados e usuários com permissões específicas para manipulação e acesso aos dados.
- Instalei e configurei o **vsftpd** para permitir a transferência de arquivos via FTP, criando usuários e liberando as portas necessárias no firewall da AWS.
- Implementei a infraestrutura de **Servidor Web** na AWS, criando instâncias EC2, instalando o Apache, configurando o acesso SSH e realizando testes de conexão ao servidor web.


- Grupo de rede local;
- Instalação da virtualização Virtualbox com a segmentação de redes A, B e C para Alunos, funcionários e Servidores;
- Trabalhei na instalação dos seguintes serviços no local: No Windows Server foram DNS e AD DS, no Ubuntu Server foram o roteamento entre as máquinas e o serviço de DHCP e instalação de duas máquinas cliente com Windows 10 Pro;
- Gravei o video demostrando as instalações;
- Revisei os documentos.
