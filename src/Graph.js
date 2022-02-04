class Node {
    constructor(name, adjacents, nodeType, link, imgRef) {
        this.name = name;
        this.adjacents = adjacents;
        this.nodeType = nodeType; 
        this.link = link;
        this.imgRef = imgRef;
    };
};

const receitas = [
    ["Bolovo", ["Sal", "Ovo", "Carne Moida", "Leite", "Pimenta-do-Reino",
    "Farinha de Rosca","Óleo"],
    "https://www.tudogostoso.com.br/receita/199322-bolovo.html",
    "https://feedmechannel.com/wp-content/uploads/2019/06/receita-de-bolovo-1024x683.jpg"],

    ["Bolinho de Bacalhau", ["Sal", "Óleo", "Farinha de Trigo", "Cheiro-Verde",
    "Batata", "Bacalhau","Ovo"],
    "https://www.tudogostoso.com.br/receita/1979-bolinho-de-bacalhau.html",
    "https://t2.rg.ltmcdn.com/pt/posts/7/2/1/bolinho_de_bacalhau_127_600_square.jpg"],

    ["Amendoim Temperado", ["Sal", "Amendoim", "Azeite", "Páprica Doce", "Páprica Defumada"],
    "https://www.tudogostoso.com.br/receita/200325-amendoim-temperado.html",
    "https://mesaesabor.com.br/wp-content/uploads/2020/09/36.jpg"]
];

const ingredientes = [
    "Ovo", "Carne Moida", "Leite", "Pimenta-do-Reino", "Farinha de Rosca", 
    "Óleo", "Farinha de Trigo", "Cheiro-Verde", "Batata", "Bacalhau",
    "Amendoim", "Azeite", "Páprica Doce", "Páprica Defumada"
];

function createGraph() {
    let graph = [];

    for(let i = 0; i < receitas.length; i++){
        let recipe = new Node(receitas[i][0], receitas[i][1], "receita", receitas[i][2], receitas[i][3]);
        graph.push(recipe);
    }

    for(let i = 0; i < ingredientes.length; i++){
        let ingredient = new Node(ingredientes[i],[], "ingrediente", "no link", "no image");
        graph.push(ingredient);
    }
    return graph;
}

export default function search(userIngredients) {
    var graph = createGraph();
    let possibleRecipes = [];
    for (let i = 0; i < graph.length; i++){
        var u = graph[i];
        var result = false;
        if(u.nodeType === "receita"){
            for(let j = 0; j < u.adjacents.length; j++){
                result = verify(u.adjacents[j], userIngredients)
                if(!result){
                    break;
                }
            };
        }
        if(result === true){
            possibleRecipes.push(u);
        }
    }
    return possibleRecipes;
}

function verify(value, userIngredients) {
    var limit = userIngredients.length
    var result = false
    for (let i = 0; i < limit; i++) {
        if(value === userIngredients[i]){
            result = true;
            break;
        }
    }
    return result
}