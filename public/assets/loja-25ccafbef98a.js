
"use strict";
const catalogData=[{"id":"couche","cat":"Cartões","name":"Cartões de visita Couchê","desc":"88 × 48 mm · Couchê 300g · colorido frente · sem enobrecimento · refile","prodDays":null,"opts":[[50,104.1],[100,121.4],[200,142.1],[300,164.5],[500,174.8],[1000,178.3],[5000,616.2]]},{"id":"vinil","cat":"Adesivos","name":"Adesivos transparentes","desc":"40 × 50 mm · Vinil transparente 150g · 4x0 · rolo meio-corte personalizado","prodDays":3,"opts":[[50,102.4],[100,112.7],[250,128.3],[500,186.9],[1000,302.4]]},{"id":"vinilbranco","cat":"Adesivos","name":"Adesivos em vinil","desc":"Vinil branco · configuração de referência; acabamento final sob confirmação","prodDays":null,"opts":[[50,92.1],[100,90.3],[250,107.6],[500,155.8],[1000,242.1]]}];
const artOptions=[["pronta","Enviar arte final pronta (sem alterações)",0],["correcao","Enviar arte para correção técnica",29.90],["criacao","Solicitar criação de arte personalizada",79.90]];
const unpriced=[
 {id:"premium-fosco",cat:"Cartões",name:"Cartão de Visita Premium Fosco com Verniz Localizado",desc:"Couché fosco 300g · laminação fosca e verniz localizado · frente e verso, conforme configuração · escolha refile, cantos arredondados ou corte especial. Acabamento e preço sujeitos à confirmação."},
 {id:"flyers",cat:"Impressos",name:"Panfletos e flyers",desc:"Diversos tamanhos, papéis e quantidades. Configuração por orçamento."},
 {id:"banners",cat:"Comunicação visual",name:"Banners e faixas",desc:"Tamanhos e materiais disponíveis sob consulta."},
 {id:"etiquetas",cat:"Adesivos",name:"Etiquetas e rótulos especiais",desc:"Medidas, cores e acabamentos sob consulta."},
 {id:"design",cat:"Design",name:"Artes digitais",desc:"Criação para redes sociais e materiais promocionais sob orçamento."},
 {id:"caneca-corp",cat:"Brindes corporativos",name:"Canecas personalizadas",desc:"Para clientes e colaboradores. Modelos, gravação e quantidade sob consulta."},
 {id:"copo-corp",cat:"Brindes corporativos",name:"Copos personalizados",desc:"Para eventos e ações corporativas. Modelos e acabamentos sob consulta."},
 {id:"canetas-corp",cat:"Brindes corporativos",name:"Canetas personalizadas",desc:"Kits e distribuição promocional com logomarca."},
 {id:"caderno-corp",cat:"Brindes corporativos",name:"Cadernos e agendas",desc:"Papelaria empresarial personalizada em diferentes formatos."},
 {id:"calendario-corp",cat:"Brindes corporativos",name:"Calendários de mesa",desc:"Modelos de mesa personalizados, incluindo opções com Wire-o e base de papel-cartão. Prazo e formato conforme orçamento."},
 {id:"kit-onboard",cat:"Brindes corporativos",name:"Kit de boas-vindas",desc:"Composição de caderno, caneta e caneca. Itens e viabilidade confirmados no orçamento."},
 {id:"kit-evento",cat:"Brindes corporativos",name:"Kit para eventos e congressos",desc:"Conjunto sob medida com bloco/caderno, credencial, caneta ou calendário."},
 {"id": "rotulo-vinho", "cat": "Rótulos", "name": "Rótulos personalizados para garrafas de vinho", "desc": "Personalize com sua marca, mensagem ou arte de Natal. Informe as medidas da área de aplicação e a quantidade. Venda somente do rótulo."},
 {"id": "rotulo-cerveja", "cat": "Rótulos", "name": "Rótulos personalizados para garrafas de cerveja", "desc": "Para long neck e outros formatos. Informe o tamanho da garrafa e se o rótulo terá contato com gelo ou condensação para cotarmos o material adequado. Venda somente do rótulo."},
 {"id": "adesivo-kraft", "cat": "Adesivos", "name": "Adesivo Couchê para sacola kraft", "desc": "Adesivo de papel Couchê para decorar ou fechar sacolas kraft de Natal. Tamanho, formato e quantidade sob consulta. Venda somente do adesivo."},
 {"id": "tag-agradecimento", "cat": "Tags e cartões", "name": "Tag de agradecimento de Natal", "desc": "Tag impressa para pendurar em sacolas e presentes, com mensagem personalizada. Informe tamanho, quantidade e se deseja furo para amarração."},
 {"id": "card-brinde", "cat": "Tags e cartões", "name": "Card de agradecimento com espaço para brinde", "desc": "Cartão impresso com área reservada para colar um brinde. Informe as medidas do item que será fixado para ajustarmos a arte. Venda somente do card."},
 {"id": "adesivo-embalagem", "cat": "Adesivos", "name": "Adesivos para embalagens diversas", "desc": "Para caixas, potes, envelopes e sacolas. Informe o tipo de embalagem, as medidas, a quantidade e as condições de uso. Material e acabamento sob consulta."},
 {"id": "rotulo-espumante", "cat": "Rótulos", "name": "Rótulos personalizados para espumante", "desc": "Rótulo para brindar 2027 com sua marca ou mensagem. Informe as medidas, a quantidade e se haverá contato com gelo ou umidade. Venda somente do rótulo."},
 {"id": "adesivos-ano-novo", "cat": "Adesivos", "name": "Adesivos de Ano Novo para embalagens", "desc": "Personalize sacolas, caixas e lembranças com uma arte de Réveillon. Material, formato, medidas e quantidade sob consulta. Venda somente dos adesivos."},
 {"id": "tags-ano-novo", "cat": "Tags e cartões", "name": "Tags de agradecimento de Ano Novo", "desc": "Tags impressas para presentes e encomendas de fim de ano, com mensagem ou marca personalizada. Consulte tamanhos, quantidades e opção de furo."},
 {"id": "cartoes-ano-novo", "cat": "Tags e cartões", "name": "Cartões personalizados Feliz 2027", "desc": "Cartões impressos para clientes, equipes e convidados. Personalize a mensagem e consulte formatos, papéis e quantidades."}
];
const productTags={
  "couche": [
    "Personalizado",
    "Impressos"
  ],
  "premium-fosco": [
    "Premium",
    "Verniz localizado",
    "Corte especial"
  ],
  "vinil": [
    "Personalizado",
    "Adesivos"
  ],
  "vinilbranco": [
    "Personalizado",
    "Adesivos"
  ],
  "banners": [
    "Comunicação visual",
    "Grande formato"
  ],
  "flyers": [
    "Impressos",
    "Divulgação"
  ],
  "etiquetas": [
    "Adesivos",
    "Personalizado"
  ],
  "design": [
    "Criação digital"
  ],
  "caneca-corp": [
    "Corporativo",
    "Brindes"
  ],
  "copo-corp": [
    "Corporativo",
    "Brindes"
  ],
  "canetas-corp": [
    "Corporativo",
    "Brindes"
  ],
  "caderno-corp": [
    "Corporativo",
    "Brindes"
  ],
  "calendario-corp": [
    "Corporativo",
    "Brindes"
  ],
  "kit-onboard": [
    "Corporativo",
    "Sob encomenda"
  ],
  "kit-evento": [
    "Corporativo",
    "Sob encomenda"
  ],
  "rotulo-vinho": [
    "Vinho",
    "Natal"
  ],
  "rotulo-cerveja": [
    "Cerveja",
    "Natal"
  ],
  "adesivo-kraft": [
    "Papel Couchê",
    "Sacola kraft",
    "Natal"
  ],
  "tag-agradecimento": [
    "Agradecimento",
    "Natal"
  ],
  "card-brinde": [
    "Agradecimento",
    "Natal"
  ],
  "adesivo-embalagem": [
    "Embalagens",
    "Natal"
  ],
  "rotulo-espumante": [
    "Espumante",
    "Ano Novo"
  ],
  "adesivos-ano-novo": [
    "Embalagens",
    "Ano Novo"
  ],
  "tags-ano-novo": [
    "Agradecimento",
    "Ano Novo"
  ],
  "cartoes-ano-novo": [
    "Feliz 2027",
    "Ano Novo"
  ]
};
const premiumQuantities=[500,1000,5000];
const premiumCuts=["Cantos retos (refile)","2 cantos arredondados","4 cantos arredondados","Corte especial personalizado"];
const productAssets={
  "premium-fosco": "amostra-cartao-premium-3fb9d419.webp",
  "banners": "amostra-banner-rollup-cf055c1b.webp",
  "etiquetas": "amostra-adesivos-vinil-90a1de01.webp",
  "caneca-corp": "amostra-caneca-personalizada-1e4fb427.webp",
  "copo-corp": "amostra-caneca-personalizada-1e4fb427.webp",
  "canetas-corp": "amostra-canetas-corporativas-b0a897c4.webp",
  "caderno-corp": "amostra-caderno-espiral-ad6af0ab.webp",
  "calendario-corp": "amostra-calendario-mesa-8308fbb0.webp",
  "couche": "soartes-cartoes-couche-2027.webp",
  "vinil": "soartes-adesivos-transparentes-2027.webp",
  "vinilbranco": "soartes-adesivos-vinil-branco-2027.webp",
  "flyers": "soartes-panfletos-2027.webp",
  "design": "soartes-artes-digitais-2027.webp",
  "kit-onboard": "soartes-kit-boas-vindas-2027.webp",
  "kit-evento": "soartes-kit-eventos-2027.webp",
  "rotulo-vinho": "soartes-natal-vinho.webp",
  "rotulo-cerveja": "soartes-natal-cerveja.webp",
  "adesivo-kraft": "soartes-natal-kraft.webp",
  "tag-agradecimento": "soartes-natal-tag.webp",
  "card-brinde": "soartes-natal-card.webp",
  "adesivo-embalagem": "soartes-natal-embalagens.webp",
  "rotulo-espumante": "soartes-ano-novo-espumante.webp",
  "adesivos-ano-novo": "soartes-ano-novo-adesivos.webp",
  "tags-ano-novo": "soartes-ano-novo-tags.webp",
  "cartoes-ano-novo": "soartes-ano-novo-cartoes.webp"
};
const money=n=>Number(n.toFixed(2)).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const deliveryText=n=>n===null?"Prazo de produção a confirmar":n+" dias úteis de produção após aprovação de arte e pagamento; transporte adicional a confirmar";
function productPhoto(id,name){
 const file=productAssets[id];
 if(!file)return "";
 return '<div class="mock photo-container"><img src="/assets/'+file+'" loading="lazy" decoding="async" alt="Amostra de '+name+'"><span class="photo-label">Imagem ilustrativa</span></div>';
}
let cart=[];
try {
 const saved=JSON.parse(localStorage.getItem("soartes_cart_v2")||"[]");
 if(Array.isArray(saved)){
  cart=saved.filter(entry=>{
   if(!entry||!Number.isInteger(entry.packs)||entry.packs<1||entry.packs>30)return false;
   const product=catalogData.find(item=>item.id===entry.id);
   return product?.opts.some(([qty])=>qty===entry.qty)&&artOptions.some(([art])=>art===entry.art);
  }).slice(0,40);
  if(cart.length!==saved.length){
   const notice=document.getElementById("cart-recovery");
   notice.textContent="Alguns itens salvos não estão disponíveis na configuração anterior. Confira as opções atuais no catálogo.";
   notice.hidden=false;
  }
 }
}catch(e){}
function persist(){try{localStorage.setItem("soartes_cart_v2",JSON.stringify(cart))}catch(e){}document.getElementById("cart-count").textContent=cart.reduce((n,x)=>n+x.packs,0)}
const seasonalCategories=["Natal","Ano Novo"];
const categories=["Todos",...seasonalCategories,...new Set([...catalogData,...unpriced].map(p=>p.cat))];let category="Todos";
function makeCatalog(){
 const q=(document.getElementById("search").value||"").toLocaleLowerCase("pt-BR").trim();
 const filters=document.getElementById("filters");
 filters.innerHTML=categories.map(c=>'<button type="button" data-category="'+c+'" class="'+(category===c?'active':'')+'">'+c+'</button>').join("");
 filters.querySelectorAll("button").forEach(b=>b.onclick=()=>{category=b.dataset.category;makeCatalog()});
 const cards=[...catalogData,...unpriced].filter(p=>(category==="Todos"||p.cat===category||(seasonalCategories.includes(category)&&(productTags[p.id]||[]).includes(category)))&&(p.name+" "+p.desc+" "+(productTags[p.id]||[]).join(" ")).toLocaleLowerCase("pt-BR").includes(q));
 const sort=document.getElementById("sort-products").value;
 if(sort==="alpha")cards.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
 else if(sort==="priced")cards.sort((a,b)=>Number(!!b.opts)-Number(!!a.opts));
 else if(sort==="quote")cards.sort((a,b)=>Number(!!a.opts)-Number(!!b.opts));
 document.getElementById("catalog-count").textContent=cards.length+" produto"+(cards.length===1?"":"s")+" encontrado"+(cards.length===1?"":"s");
 document.getElementById("catalog").innerHTML=cards.map(p=>{
  const priced=Array.isArray(p.opts);const premium=p.id==='premium-fosco';const tags=(productTags[p.id]||[p.cat]).map(t=>'<span>'+t+'</span>').join('');
  return '<article class="product">'+productPhoto(p.id,p.name)+'<div class="info"><span class="product-tags">'+tags+'</span><h3>'+p.name+'</h3><p>'+p.desc+'</p>'+(priced?'<label class="prod-option">Quantidade por pacote<select class="qty-select" data-id="'+p.id+'">'+p.opts.map(o=>'<option value="'+o[0]+'">'+o[0].toLocaleString("pt-BR")+' unidades</option>').join("")+'</select></label><label class="prod-option">Preparação de arte<select class="art-select" data-id="'+p.id+'">'+artOptions.map(a=>'<option value="'+a[0]+'">'+a[1]+(a[2]?" (+"+money(a[2])+")":"")+'</option>').join("")+'</select></label><label class="prod-option">Número de pacotes<input class="pack-count" data-id="'+p.id+'" type="number" min="1" max="30" step="1" value="1"></label><div class="price" id="price-'+p.id+'">'+money(p.opts[0][1])+'<small>Frete não incluído. Sujeito à confirmação.</small></div><small class="hint">'+deliveryText(p.prodDays)+'</small><button type="button" class="add-btn" data-id="'+p.id+'">Adicionar ao carrinho</button>':(premium?'<label class="prod-option">Quantidade<select id="premium-qty">'+premiumQuantities.map(q=>'<option value="'+q+'">'+q.toLocaleString("pt-BR")+' unidades</option>').join("")+'</select></label><label class="prod-option">Acabamento<select id="premium-cut">'+premiumCuts.map(v=>'<option value="'+v+'">'+v+'</option>').join("")+'</select></label><label class="prod-option">Preparação da arte<select id="premium-art">'+artOptions.map(a=>'<option value="'+a[0]+'">'+a[1]+(a[2]?' (+'+money(a[2])+')':'')+'</option>').join("")+'</select></label><div class="premium-option-note">Laminação fosca com verniz localizado. O corte especial pode alterar custo e prazo; confirmaremos a configuração antes do pagamento.</div>':'')+'<div class="price">Sob consulta</div><button type="button" class="quote-btn" data-id="'+p.id+'">Solicitar orçamento</button>')+'</div></article>'
 }).join("")||'<p>Nenhum produto encontrado.</p>';
 document.querySelectorAll(".qty-select,.art-select,.pack-count").forEach(el=>el.addEventListener("change",()=>updatePrice(el.dataset.id)));
 document.querySelectorAll(".add-btn").forEach(b=>b.onclick=()=>addToCart(b.dataset.id));
 document.querySelectorAll(".quote-btn").forEach(b=>b.onclick=()=>{const p=unpriced.find(x=>x.id===b.dataset.id);whatsapp(p.id==="premium-fosco"?"Olá, SóArtes! Gostaria de orçamento de Cartão Premium Fosco com Verniz Localizado.\nQuantidade: "+document.getElementById("premium-qty").value+" unidades\nAcabamento: "+document.getElementById("premium-cut").value+"\nArte: "+(artOptions.find(x=>x[0]===document.getElementById("premium-art").value)||artOptions[0])[1]+". Por favor confirmem preço, viabilidade do acabamento, prazo e frete.":"Olá, SóArtes! Solicito orçamento para "+p.name+".\nQuantidade: \nMedidas e acabamento: \nArte pronta, correção ou criação: \nCEP de destino: \nData desejada: ")});
}
function getSelection(id){
 const p=catalogData.find(x=>x.id===id);if(!p)return null;
 const qty=Number(document.querySelector('.qty-select[data-id="'+id+'"]').value);
 const art=document.querySelector('.art-select[data-id="'+id+'"]').value;
 const packs=Number(document.querySelector('.pack-count[data-id="'+id+'"]').value);
 if(!p.opts.some(o=>o[0]===qty)||!artOptions.some(a=>a[0]===art)||!Number.isInteger(packs)||packs<1||packs>30)return null;
 return {id,qty,art,packs};
}
function linePrice(entry){
 const p=catalogData.find(x=>x.id===entry.id);const pack=p.opts.find(o=>o[0]===entry.qty)[1];
 const art=artOptions.find(a=>a[0]===entry.art)[2];return Math.round((pack+art)*100)*entry.packs/100;
}
function updatePrice(id){
 const e=getSelection(id);if(!e)return;
 const el=document.getElementById("price-"+id);
 if(el)el.innerHTML=money(linePrice(e))+'<small>Subtotal com preparação de arte por pacote, sem frete. Estimativa sujeita à confirmação.</small>';
}
function addToCart(id){const e=getSelection(id);if(!e){alert("Confira a quantidade de pacotes (1 a 30).");return}
 const existing=cart.find(x=>x.id===e.id&&x.qty===e.qty&&x.art===e.art);
 if(existing){
  if(existing.packs+e.packs>30){alert("O limite é de 30 pacotes por configuração. Ajuste a quantidade no carrinho.");return;}
  existing.packs+=e.packs;
 }else if(cart.length<40){cart.push(e)}else{alert("Carrinho com muitos itens. Envie o orçamento atual antes de adicionar mais.");return;}
 persist();renderCart();openCart();
}
function openCart(){document.getElementById("cart-sheet").hidden=false;document.getElementById("cart-shade").hidden=false;document.getElementById("close-cart").focus()}
function closeCart(){document.getElementById("cart-sheet").hidden=true;document.getElementById("cart-shade").hidden=true}
function renderCart(){
 document.getElementById("cart-list").innerHTML=cart.length?cart.map((e,i)=>{
 const p=catalogData.find(x=>x.id===e.id);const art=artOptions.find(a=>a[0]===e.art);
 return '<div class="cart-item"><b>'+p.name+'</b><small>'+e.qty.toLocaleString("pt-BR")+' unidades por pacote</small><small>'+art[1]+(art[2]?' (+'+money(art[2])+' por pacote)':'')+'</small><div class="cart-controls"><label>Pacotes <input type="number" min="1" max="30" step="1" value="'+e.packs+'" data-packs="'+i+'" aria-label="Pacotes de '+p.name+'"></label><b>'+money(linePrice(e))+'</b></div><button type="button" data-remove="'+i+'">Remover</button></div>'
 }).join(""):'<p class="muted">Seu carrinho está vazio.</p>';
 document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.remove),1);persist();renderCart()});
 document.querySelectorAll("[data-packs]").forEach(el=>el.addEventListener("change",()=>{
 const index=Number(el.dataset.packs),value=Number(el.value);
 if(!Number.isInteger(value)||value<1||value>30){alert("Escolha de 1 a 30 pacotes.");renderCart();return;}
 if(cart[index]){cart[index].packs=value;persist();renderCart();}
 }));
 const sum=cart.reduce((n,e)=>n+linePrice(e),0);
 document.getElementById("clear-cart").hidden=!cart.length;
 document.getElementById("cart-totals").innerHTML='<div><span>Produtos e preparação de arte</span><strong>'+money(sum)+'</strong></div><div><span>Frete</span><strong>A confirmar</strong></div><div class="sum"><span>Subtotal sem frete</span><strong>'+money(sum)+'</strong></div><p class="hint">O total final e a data prevista serão informados pelo atendimento após análise do CEP, da produção e da arte.</p>';
 document.getElementById("cart-delivery").innerHTML=cart.length?'<strong>Estimativa de fabricação</strong>'+ (cart.every(e=>catalogData.find(p=>p.id===e.id).prodDays===3)?'Referência de 3 dias úteis de produção após aprovação de arte e pagamento, sujeita a volume e confirmação operacional.':'O prazo de produção será confirmado por produto após aprovação de arte e pagamento.')+'<br><small>Acrescentar tempo de criação/revisão e entrega, ainda não cotados.</small>':'<strong>Prazo de entrega</strong>Selecione produtos para consultar uma estimativa.';
}
function whatsapp(message){window.open("https://wa.me/5516981839138?text="+encodeURIComponent(message),"_blank","noopener,noreferrer")}
document.querySelectorAll("[data-catalog-category]").forEach(link=>{
 link.addEventListener("click",()=>{
  category=link.dataset.catalogCategory;
  document.getElementById("search").value="";
  makeCatalog();
 });
});
document.getElementById("search").addEventListener("input",makeCatalog);
document.getElementById("sort-products").addEventListener("change",makeCatalog);
document.getElementById("gift-quote").onclick=()=>whatsapp("Olá, SóArtes! Quero uma proposta de brindes corporativos. Preciso definir produtos, quantidades, personalização, arte e prazo de entrega.");
document.querySelectorAll("[data-gift]").forEach(b=>b.onclick=()=>whatsapp("Olá, SóArtes! Solicito orçamento de "+b.dataset.gift+". Por favor, enviem opções de quantidade, personalização, preços e prazo."));
document.getElementById("open-cart").onclick=openCart;
document.getElementById("clear-cart").onclick=()=>{if(!cart.length)return;if(confirm("Deseja esvaziar todo o carrinho?")){cart=[];persist();renderCart();}};
document.getElementById("close-cart").onclick=closeCart;
document.getElementById("cart-shade").onclick=closeCart;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
document.getElementById("ship-to-cart").onclick=()=>{
 const origin=document.getElementById("ship-cep");
 const cep=origin.value.replace(/\D/g,"");
 if(cep.length!==8||cep==="00000000"){
  alert("Informe um CEP de destino com 8 dígitos.");
  origin.focus();
  return;
 }
 document.getElementById("cart-cep").value=cep.slice(0,5)+"-"+cep.slice(5);
 openCart();
};
document.getElementById("checkout").onclick=()=>{
 if(!cart.length){alert("Adicione um produto ao carrinho.");return}
 const cep=document.getElementById("cart-cep").value.replace(/\D/g,"");
 if(cep.length!==8||cep==="00000000"){alert("Informe um CEP válido de 8 dígitos.");return}
 const lines=cart.map((e,i)=>{const p=catalogData.find(x=>x.id===e.id);return (i+1)+". "+p.name+" — "+e.qty+" un./pacote × "+e.packs+" — "+artOptions.find(a=>a[0]===e.art)[1]+" — subtotal "+money(linePrice(e))});
 const subtotal=money(cart.reduce((n,e)=>n+linePrice(e),0));
 const dateInput=document.getElementById("cart-needed");
 const needed=dateInput.value;
 const payment=document.getElementById("cart-payment").value;
 const paymentLabel=new Map([["pix","Pix"],["pagseguro","Link PagSeguro (PagBank)"]]).get(payment)||"A combinar";
 if(needed&&needed<dateInput.min){alert("A data desejada não pode estar no passado.");dateInput.focus();return;}
 const notes=document.getElementById("cart-notes").value.trim().replace(/[<>]/g,"");
 whatsapp("Olá, SóArtes! Gostaria de confirmar meu carrinho:\n"+lines.join("\n")+"\nSubtotal sem frete: "+subtotal+"\nCEP: "+cep+"\nData desejada: "+(needed||"Sem preferência")+"\nPreferência de pagamento: "+paymentLabel+"\nOrientações de arte: "+(notes||"A combinar")+"\nSolicito validação do preço, cálculo oficial do frete, data estimada de entrega e instruções para enviar/aprovar a arte. Entendo que este pedido ainda não está pago nem confirmado.");
};
document.getElementById("brief").onsubmit=e=>{e.preventDefault();whatsapp("Olá, SóArtes! Meu nome/empresa: "+document.getElementById("name").value.trim()+"\nProduto: "+document.getElementById("kind").value+"\nDescrição: "+document.getElementById("description").value.trim()+"\nGostaria de orçamento de criação.")};
document.getElementById("cart-needed").min=new Intl.DateTimeFormat("en-CA",{
 timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"
}).format(new Date());
persist();makeCatalog();renderCart();
