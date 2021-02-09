exports.wait = () => {
	return`*「❗」ESPERE UM POUCO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「❗」ATIVAR NIVELAMENTO*`
}

exports.lvloff = () => {
	return`*「❗」DESATIVAR NIVELAMENTO*`
}

exports.lvlnul = () => {
	return`*「❗」SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*「❗」O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「❗」NÃO REGISTRADO*\n*Como registrar ${prefix}lista de nomes|idade*\n\n*exemplo ${prefix}daftar reizin|15*`
}

exports.baned = () => {
	return`*「❗」DESCULPE, OTARIO, MAS VOCÊ JÁ ESTÁ BANIDO YAHAHAHA HAYUUU:V*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você registrou irmã >_<*`
}

exports.stikga = () => {
	return`*「 FALHOU 」Tente novamente na próxima vez mana*`
}

exports.linkga = () => {
	return`*「❗」desculpe o link é inválido*`
}

exports.groupo = () => {
	return`*「❗」SÓ GRUPO*`
}

exports.ownerb = () => {
	return`*「❗」PROPRIETÁRIO DO BOT APENAS*`
}

exports.ownerg = () => {
	return`*「❗」PROPRIETÁRIO SÓ DO GRUPO*`
}

exports.admin = () => {
	return`*「❗」SOMENTE GRUPO DE ADMINISTRAÇÃO*`
}

exports.badmin = () => {
	return`*「❗」O BOT DEVE SER ADMINISTRADOR*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietário do BOT, relatório falso/main2 não será respondido*`
}

exports.wrongf = () => {
	return`*「🤔」Cadê o texto mano?*`
}

exports.clears = () => {
	return`*「🚮」Limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「❗」CADASTRO*\n\npara saber se você se cadastrou, verifique a mensagem que enviei\n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRO DE SUCESSO 」*\Informações do usuário :\n\n*➸ Nome : ${namaUser}*\n*➸ Número : wa.me/${sender.split("@")[0]}*\n*➸ Era : ${umurUser}*\n*➸ Hora do registro : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Esta mensagem é muito importante :v_`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} script do proprietário bukan*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nome* : ${pushname}
➸ *Numero* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira*\n*O limite é zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 Limite CONTAGEM 」*
sisa limit anda : ${limitCounts}

Atualização premium do meu chefe, então é grátis usar bots`
}

exports.satukos = () => {
	return`*Adicionar parâmetros 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}