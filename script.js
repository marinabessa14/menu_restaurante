// Objeto que armazena os itens do menu, divididos por categorias
const menuItems = {
    entradas: [
        { name: 'Bruschetta Caprese', description: 'Tomates frescos, mozzarella e manjericão em pão italiano', price: 'R$ 28' },
        { name: 'Carpaccio de Filé', description: 'Finas fatias de filé com molho de mostarda e alcaparras', price: 'R$ 45' },
        { name: 'Caprese Salad (Insalata Caprese)', description: 'Fatias de tomate, mussarela de búfala fresca e folhas de manjericão,um toque de vinagre balsâmico', price: 'R$ 32' },
        { name: 'Arancini di Riso', description: 'Bolinhos crocantes de arroz arbóreo recheados com queijo mussarela e ragù (molho de carne)', price: 'R$ 40' },
        { name: 'Prosciutto e Melone', description: 'Fatias finas de presunto cru italiano (prosciutto) servidas com pedaços de melão fresco', price: 'R$ 25' },
        { name: 'Focaccia com Ervas', description: 'Pão italiano achatado e macio, coberto com azeite de oliva, alecrim, tomilho e sal grosso', price: 'R$ 22' },
    ],
    'pratos principais': [
        { name: 'Risotto al Funghi', description: 'Arroz arbóreo com mix de cogumelos frescos e parmesão', price: 'R$ 68' },
        { name: 'Filé ao Molho Madeira', description: 'Medalhão de filé mignon com molho madeira e batatas rústicas', price: 'R$ 85' },
        { name: 'Spaghetti alla Carbonara', description: 'Espaguete cozido al dente, misturado com um creme feito de ovos, queijo pecorino, bacon', price: 'R$ 65' },
        { name: 'Pizza Margherita', description: 'Massa fina e crocante, coberta com molho de tomate, mussarela fresca, manjericão e azeite de oliva', price: 'R$ 75' },
        { name: 'Saltimbocca alla Romana', description: 'Filés de vitela envoltos em fatias de presunto cru e folhas de sálvia, manteiga e vinho branco', price: 'R$ 80' },
        { name: 'Pollo alla Parmigiana', description: 'Filés de frango empanados e fritos, cobertos com molho de tomate e queijo mussarela e gratinados', price: 'R$ 88' },
        { name: 'Bistecca alla Fiorentina', description: 'Um bife suculento de corte T-bone, grelhado, sal grosso, pimenta e azeite de oliva', price: 'R$ 90' },
        { name: 'Gnocchi al Pesto', description: 'Gnocchi de batata caseiro, molho fresco feito de manjericão, queijo parmesão e azeite de oliva', price: 'R$ 72' },
        { name: 'Cioppino', description: 'Um ensopado de frutos do mar com tomate, vinho branco e ervas e pão italiano', price: 'R$ 90' },
        { name: 'Vitello Tonnato', description: 'Fatias de vitela assada e fria, molho cremoso de atum, anchovas, alcaparras e maionese', price: 'R$ 68' }
    ],
    sobremesas: [
        { name: 'Tiramisù', description: 'Clássica sobremesa italiana com café e mascarpone', price: 'R$ 32' },
        { name: 'Petit Gâteau', description: 'Bolo quente de chocolate com sorvete de baunilha', price: 'R$ 34' },
        { name: 'Gelato Artigianale', description: 'Sorvete italiano cremoso, feito com ingredientes frescos e naturais', price: 'R$ 38' },
        { name: 'Torta della Nonna', description: 'Uma torta tradicional italiana com massa amanteigada, creme pasticceria, pinoli e açúcar confeiteiro', price: 'R$ 42' },
        { name: 'Semifreddo', description: 'Uma sobremesa gelada e cremosa, semelhante ao sorvete, mas com uma textura mais leve', price: 'R$ 30' }
    ],
    bebidas: [
        { name: 'Vinho Tinto', description: 'Cabernet Sauvignon - Taça', price: 'R$ 32' },
        { name: 'Água San Pellegrino', description: '500ml', price: 'R$ 18' },
        { name: 'Limonata', description: 'Limonada italiana, feita com limões frescos, água e açúcar', price: 'R$ 20' },
        { name: 'Chinotto', description: 'Refrigerante italiano feito a partir da fruta chinotto, com um sabor amargo e cítrico', price: 'R$ 22' },
        { name: 'Vinho Branco', description: 'Cabernet Sauvignon - Taça', price: 'R$ 32' },
        { name: 'Prosecco', description: 'Um espumante italiano leve e frisante', price: 'R$ 35' },
        { name: 'Negroni', description: 'Um coquetel clássico italiano feito com gin, Campari e vermute tinto, gelo uma casca de laranja', price: 'R$ 30' },
        { name: 'Lambrusco', description: 'Um vinho tinto frisante e levemente adocicado, originário da região da Emilia-Romagna', price: 'R$ 40' },
    ]
};

// Função para criar o HTML de cada item do menu
function createMenuItem(item) {
    return `
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h3 class="h5 mb-1">${item.name}</h3>
                    <p class="text-muted small mb-0">${item.description}</p>
                </div>
                <span class="ms-3 text-primary fw-bold">${item.price}</span>
            </div>
        </div>
    `;
}

// Quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as seções do menu
    const sections = document.querySelectorAll('.menu-section');

    // Itera sobre cada seção do menu
    sections.forEach(section => {
        // Obtém o título da seção e converte para minúsculas
        const title = section.querySelector('h2').textContent.toLowerCase();
        // Seleciona o contêiner onde os itens do menu serão inseridos
        const itemsContainer = section.querySelector('.menu-items');
        
        // Normaliza o título para corresponder às chaves do objeto menuItems
        const menuKey = title.replace('pratos principais', 'pratos principais')
                            .replace('entradas', 'entradas')
                            .replace('sobremesas', 'sobremesas')
                            .replace('bebidas', 'bebidas');
        
        // Verifica se a chave existe no objeto menuItems
        if (menuItems[menuKey]) {
            // Mapeia os itens do menu para o HTML e insere no contêiner
            const items = menuItems[menuKey].map(createMenuItem).join('');
            itemsContainer.innerHTML = items;
        }
    });
});