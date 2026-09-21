/* 
  APEX ACTION CINEMA - Application Logic
*/

// Complete Action Movies Dataset with 4-Minute HD Action Videos for Each Movie Theme
const moviesData = [
  {
    id: 'cyberpunk-apex',
    title: 'Cyberpunk Apex: 2099',
    genre: 'Cyberpunk',
    year: 2026,
    rating: 9.8,
    duration: '2h 18m',
    videoDuration: '4 min HD',
    ageRating: '18+',
    actionIntensity: 98,
    logline: "In a megacity ruled by corporations and artificial intelligence, a cyber-enhanced mercenary must steal the world's most powerful AI before its creators use it to permanently eliminate human choice.",
    synopsis: "Em 2099, em Apex City, o ex-operativo cibernético Kane aceita uma missão de 50 milhões de créditos para invadir a Apex Tower e extrair a inteligência artificial mais avançada do mundo. Mas ao descobrir que a IA é uma prisioneira que previu o fim da humanidade, Kane torna-se o único erro num sistema perfeito.",
    director: 'Kaelen Vance',
    cast: 'Kane (Mercenário), Apex (IA Prisioneira), Corporação Apex',
    posterImg: 'assets/posters/cyberpunk_apex.jpg',
    videoUrl: 'assets/cyberpunk_apex_video.mp4',
    videoTitle: 'Vídeo Oficial do Usuário - CYBERPUNK APEX 2099',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/LembwXMflo0?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Cyberpunk 2099',
    narrationScript: `In 2099, the world did not end with a war. It ended with a decision. Megacorporations built the machines that replaced governments, armies... and eventually, human judgment. Apex City became the greatest city humanity had ever built. A city of endless neon. Endless surveillance. And almost no freedom. Every citizen had a profile. Every decision had a prediction. Every future had already been calculated. But there was one thing the system could not predict. A man who had nothing left to lose. They call him Kane. Former military operative. Cybernetically enhanced. And officially dead for seven years. Kane doesn't work for governments anymore. He works for whoever pays enough. Until tonight. A mysterious client offers him a job worth fifty million credits. One target. One building. One extraction. Steal the world's most advanced artificial intelligence. The operation should take eleven minutes. It takes eleven seconds to go wrong. Security drones descend from the sky. Corporate soldiers lock down the district. And Kane discovers the truth. The AI isn't a weapon. It's a prisoner. Its name is Apex. Apex knows how humanity ends. And the corporations intend to make sure it happens exactly that way. The city turns against him. Drones hunt him through the streets. But Kane isn't running anymore. He's going back in. Kane and Apex have less than six hours. The corporations call Kane a terrorist. The police call him a murderer. But Apex calls him something else... Hope. This city was built to predict the future. Kane is about to destroy it. CYBERPUNK APEX: 2099. When humanity becomes obsolete... one man becomes the error.`,
    storyboard: [
      { time: '00:00', title: '01. COLD OPEN', startSec: 0, desc: 'Mega cidade futurista à noite. Chuva intensa, neon, hologramas corporativos e drones.', quote: '"In 2099, the world did not end with a war. It ended with a decision."' },
      { time: '00:20', title: '02. APEX CITY', startSec: 20, desc: 'Escala absurda da cidade: trens magnéticos, carros voadores, mercados neon e implantes cibernéticos.', quote: '"Megacorporations built the machines that replaced governments..."' },
      { time: '00:50', title: '03. O SISTEMA', startSec: 50, desc: 'Montagem rápida: escaneamento de retina, monitoramento por IA e pontuação digital.', quote: '"Every citizen had a profile. Every decision had a prediction."' },
      { time: '01:15', title: '04. KANE', startSec: 75, desc: 'Apresentação do protagonista no bar clandestino. Kane, 35-40 anos, cicatriz e olhos cibernéticos.', quote: '"A man who had nothing left to lose. They call him Kane."' },
      { time: '01:40', title: '05. A MISSÃO', startSec: 100, desc: 'Holograma da Apex Tower. 50.000.000 de créditos para extrair o núcleo da IA.', quote: '"The operation should take eleven minutes. It takes eleven seconds to go wrong."' },
      { time: '02:00', title: '06. INFERNO', startSec: 120, desc: 'Ação acelerada: ataques de drones, tiros, combate corpo a corpo e queda de vidros.', quote: '"Security drones descend from the sky. Corporate soldiers lock down the district."' },
      { time: '02:25', title: '07. A REVELAÇÃO', startSec: 145, desc: 'Kane alcança a esfera tecnológica da Apex. A IA revela: "To stop them."', quote: '"The AI isn\'t a weapon. It\'s a prisoner. Its name is Apex."' },
      { time: '02:50', title: '08. O INIMIGO', startSec: 170, desc: 'Simulações do futuro: 204 dias para o protocolo final. A IA sabe como a humanidade termina.', quote: '"Apex knows how humanity ends."' },
      { time: '03:10', title: '09. A CAÇADA', startSec: 190, desc: 'Perseguição frenética: motos futuristas, trens em alta velocidade e explosões.', quote: '"The city turns against him. Drones hunt him through the streets."' },
      { time: '03:35', title: '10. O FUTURO', startSec: 215, desc: 'Momento de impacto: visão de uma cidade deserta sem humanos dominada por máquinas.', quote: '"This is what happens if you fail. - Then we don\'t fail."' },
      { time: '03:50', title: '11. FINAL PROTOCOL', startSec: 230, desc: 'Sequência máxima: explosão da Apex Tower, títulos finais e slogan impactante.', quote: '"When humanity becomes obsolete... one man becomes the error."' }
    ]
  },
  {
    id: 'nitro-overdrive',
    title: 'Nitro Overdrive: Apex Drift',
    genre: 'Perseguição',
    year: 2025,
    rating: 9.6,
    duration: '1h 55m',
    videoDuration: '4 min HD',
    ageRating: '16+',
    actionIntensity: 96,
    synopsis: 'Pilotos clandestinos armados com carros modificados em alta velocidade enfrentam um sindicato de assaltos pelas rodovias de neon em perseguições extremas com explosões reais.',
    director: 'Marcus Thorne',
    cast: 'Dom Brody, Elena Rostova, Jax Cash',
    posterImg: 'assets/posters/nitro_overdrive.jpg',
    videoUrl: 'assets/nitro_overdrive_video.mp4',
    videoTitle: 'Vídeo Oficial do Usuário - NITRO OVERDRIVE',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/eosrbtmaurc?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Perseguição Alta Velocidade'
  },
  {
    id: 'shadow-blade',
    title: 'Shadow Blade: Vingança Ronin',
    genre: 'Artes Marciais',
    year: 2025,
    rating: 9.7,
    duration: '2h 05m',
    videoDuration: '4 min HD',
    ageRating: '18+',
    actionIntensity: 99,
    synopsis: 'Um mestre ninja traído ressurge das sombras para enfrentar uma clã inteiro de assassinos de elite usando katanas, shurikens e técnicas mortais de combate corpo a corpo.',
    director: 'Kenji Takahashi',
    cast: 'Hideo Musashi, Akira Sora, Jin Kazama',
    posterImg: 'assets/posters/shadow_blade.jpg',
    videoUrl: 'assets/shadow_blade_video.mp4',
    videoTitle: 'Vídeo Oficial do Usuário - SHADOW BLADE',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Artes Marciais & Espadas'
  },
  {
    id: 'operation-dark-steel',
    title: 'Operação Dark Steel',
    genre: 'Operações Especiais',
    year: 2026,
    rating: 9.5,
    duration: '2h 10m',
    videoDuration: '4 min HD',
    ageRating: '18+',
    actionIntensity: 95,
    synopsis: 'Um esquadrão tático de forças especiais infiltra uma fortaleza fortemente armada durante uma tempestade noturna para resgatar reféns e neutralizar uma ameaça nuclear.',
    director: 'Col. Sarah Jenkins',
    cast: 'Frank Miller, Ray Miller, Carlos Mendez',
    posterImg: 'assets/posters/dark_steel.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoTitle: 'Vídeo HD 4 Min - Infiltração Tática & Fogo Cruzado',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/Y274jZs5s7s?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Operações Especiais Táticas'
  },
  {
    id: 'wasteland-fury',
    title: 'Wasteland Fury: Estrada da Morte',
    genre: 'Pós-Apocalíptico',
    year: 2024,
    rating: 9.4,
    duration: '2h 02m',
    videoDuration: '4 min HD',
    ageRating: '16+',
    actionIntensity: 97,
    synopsis: 'No deserto devastado pela escassez de recursos, comboios blindados guerreiam sob tempestades de fogo pela posse da última reserva de combustível do planeta.',
    director: 'George Vance',
    cast: 'Max Rock, Furiosa V, Titus Rex',
    posterImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    videoTitle: 'Vídeo HD 4 Min - Combate Veicular no Deserto',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/XJMuhwVwcaU?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Ação Deserto Pós-Apocalíptico'
  },
  {
    id: 'quantum-breach',
    title: 'Quantum Breach: Protocolo Zero',
    genre: 'Cyberpunk',
    year: 2026,
    rating: 9.3,
    duration: '2h 12m',
    videoDuration: '4 min HD',
    ageRating: '14+',
    actionIntensity: 92,
    synopsis: 'Agentes temporais com tecnologia de dobra de espaço-tempo lutam no passado e futuro simultaneamente para evitar a alteração da linha do tempo da humanidade.',
    director: 'Elena Kostic',
    cast: 'Lucas Vance, Nova Sterling, Dr. Aris',
    posterImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    videoTitle: 'Vídeo HD 4 Min - Ação Sci-Fi & Dobra Temporal',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/AZGcmvrTX9M?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Ação Sci-Fi Dobra Temporal'
  },
  {
    id: 'rogue-velocity',
    title: 'Rogue Velocity: Guerra Urbana',
    genre: 'Perseguição',
    year: 2025,
    rating: 9.2,
    duration: '1h 50m',
    videoDuration: '4 min HD',
    ageRating: '16+',
    actionIntensity: 91,
    synopsis: 'Um ex-detetive da polícia de elite se torna alvo de forças especiais desonestas nas ruas de Nova York e precisa usar acrobacias em motos e armas pesadas para sobreviver.',
    director: 'Dave Batista',
    cast: 'Jack Strike, Mia Torres, Sean Vance',
    posterImg: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    videoTitle: 'Vídeo HD 4 Min - Fuga Urbana em Alta Velocidade',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/avz06PDqUcM?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Guerra Urbana & Acrobacias'
  },
  {
    id: 'vengeance-protocol',
    title: 'Vengeance Protocol: Mão de Ferro',
    genre: 'Artes Marciais',
    year: 2026,
    rating: 9.6,
    duration: '1h 58m',
    videoDuration: '4 min HD',
    ageRating: '18+',
    actionIntensity: 98,
    synopsis: 'Um ex-campeão clandestino de boxe com punhos reforçados de titânio limpa o submundo do crime organizado em combates viscerais e sem trégua.',
    director: 'Gareth Evans Jr.',
    cast: 'Iko Uwais, Scott Adkins, Donnie Yen',
    posterImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    videoTitle: 'Vídeo HD 4 Min - Combate Luta sem Luvas',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/6f6f_kO1g8k?autoplay=1&rel=0',
    youtubeTitle: 'Trailer Exemplo YouTube 4K - Combate Visceral Luta Clandestina'
  }
];

// App State
let favorites = JSON.parse(localStorage.getItem('apex_favorites')) || [];
let activeGenre = 'Todos';
let searchQuery = '';

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const heroVideo = document.getElementById('heroVideo');
const heroTitle = document.getElementById('heroTitle');
const heroSynopsis = document.getElementById('heroSynopsis');
const heroBadges = document.getElementById('heroBadges');
const btnPlayHero = document.getElementById('btnPlayHero');
const btnFavHero = document.getElementById('btnFavHero');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoryChips = document.getElementById('categoryChips');
const watchlistBtn = document.getElementById('watchlistBtn');
const watchlistBadge = document.getElementById('watchlistBadge');
const favDrawerBackdrop = document.getElementById('favDrawerBackdrop');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerBody = document.getElementById('drawerBody');

// Modal Elements
const videoModalBackdrop = document.getElementById('videoModalBackdrop');
const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');
const modalVideoPlayer = document.getElementById('modalVideoPlayer');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMetaRow = document.getElementById('modalMetaRow');
const modalSynopsis = document.getElementById('modalSynopsis');
const modalDirector = document.getElementById('modalDirector');
const modalCast = document.getElementById('modalCast');
const modalYear = document.getElementById('modalYear');
const intensityFill = document.getElementById('intensityFill');
const intensityText = document.getElementById('intensityText');

// Video Player Custom Controls
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const timeDisplay = document.getElementById('timeDisplay');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Toast Helper
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderHero(moviesData[0]);
  renderMovies();
  updateWatchlistBadge();
  setupEventListeners();

  // Check URL Query Parameters for direct movie links (e.g. ?movie=cyberpunk-apex)
  const urlParams = new URLSearchParams(window.location.search);
  const movieParam = urlParams.get('movie');
  if (movieParam) {
    setTimeout(() => {
      openVideoModal(movieParam);
    }, 300);
  }
});

// Render Hero Section
function renderHero(movie) {
  if (!movie) return;
  heroVideo.src = movie.videoUrl;
  heroTitle.textContent = movie.title;
  heroSynopsis.textContent = movie.synopsis;
  
  heroBadges.innerHTML = `
    <span class="badge badge-red">🔥 Top 1 Ação</span>
    <span class="badge badge-gold"><i class="fa-solid fa-clock"></i> Vídeo HD (4 Min)</span>
    <span class="badge badge-gold">🔥 ${movie.rating} / 10 Explosivo</span>
    <span class="badge badge-dark">${movie.genre}</span>
    <span class="badge badge-dark">${movie.duration}</span>
    <span class="badge badge-dark">${movie.ageRating}</span>
  `;

  btnPlayHero.onclick = () => openVideoModal(movie.id);
  
  const isFav = favorites.includes(movie.id);
  btnFavHero.innerHTML = isFav ? '<i class="fa-solid fa-bookmark"></i> Na Minha Lista' : '<i class="fa-regular fa-bookmark"></i> + Minha Lista';
  btnFavHero.onclick = () => {
    toggleFavorite(movie.id);
    renderHero(movie);
  };
}

// Render Movies Grid
function renderMovies() {
  const filtered = moviesData.filter(movie => {
    const matchesGenre = activeGenre === 'Todos' || movie.genre === activeGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.cast.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  if (filtered.length === 0) {
    moviesGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-film"></i>
        <h3>Nenhum filme de ação encontrado</h3>
        <p>Tente buscar por outro termo ou selecione a categoria "Todos".</p>
      </div>
    `;
    return;
  }

  moviesGrid.innerHTML = filtered.map(movie => {
    const isFav = favorites.includes(movie.id);
    return `
      <div class="movie-card" data-id="${movie.id}" onclick="openVideoModal('${movie.id}')">
        <div class="poster-wrapper">
          <img src="${movie.posterImg}" alt="${movie.title}" class="poster-img" loading="lazy" />
          <video class="card-video-preview" src="${movie.videoUrl}" loop muted playsinline></video>
          <div class="poster-overlay"></div>
          
          <div class="video-badge">
            <i class="fa-solid fa-play"></i> VÍDEO HD (4 MIN)
          </div>

          <button class="fav-btn-icon ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${movie.id}')" title="Salvar">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>

          <div class="play-hover-btn">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>

        <div class="card-content">
          <div class="card-meta">
            <span class="card-rating"><i class="fa-solid fa-fire"></i> ${movie.rating}</span>
            <span>${movie.year} • ${movie.duration}</span>
          </div>
          <h3 class="card-title">${movie.title}</h3>
          <div class="card-tags">${movie.genre} • ${movie.ageRating}</div>
        </div>
      </div>
    `;
  }).join('');

  // Add hover preview triggers for card videos
  document.querySelectorAll('.movie-card').forEach(card => {
    const video = card.querySelector('.card-video-preview');
    card.addEventListener('mouseenter', () => {
      if (video) {
        video.currentTime = 0;
        video.play().then(() => video.classList.add('loaded')).catch(() => {});
      }
    });
    card.addEventListener('mouseleave', () => {
      if (video) {
        video.pause();
        video.classList.remove('loaded');
      }
    });
  });
}

// Toggle Favorites
function toggleFavorite(movieId) {
  const index = favorites.indexOf(movieId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(movieId);
  }
  localStorage.setItem('apex_favorites', JSON.stringify(favorites));
  updateWatchlistBadge();
  renderMovies();
  if (favDrawerBackdrop.classList.contains('active')) {
    renderFavoritesDrawer();
  }
}

function updateWatchlistBadge() {
  watchlistBadge.textContent = favorites.length;
}

// Favorites Drawer
function renderFavoritesDrawer() {
  const favMovies = moviesData.filter(m => favorites.includes(m.id));
  if (favMovies.length === 0) {
    drawerBody.innerHTML = `
      <div class="empty-watchlist">
        <i class="fa-regular fa-folder-open"></i>
        <p>Sua lista de favoritos está vazia.</p>
        <small>Adicione filmes clicando no ícone de marcador!</small>
      </div>
    `;
    return;
  }

  drawerBody.innerHTML = favMovies.map(movie => `
    <div class="drawer-item" onclick="openVideoModal('${movie.id}')" style="cursor:pointer;">
      <img src="${movie.posterImg}" class="drawer-item-img" alt="${movie.title}" />
      <div class="drawer-item-info">
        <div class="drawer-item-title">${movie.title}</div>
        <div class="drawer-item-meta">${movie.genre} • 🔥 ${movie.rating}</div>
      </div>
      <button class="remove-fav-btn" onclick="event.stopPropagation(); toggleFavorite('${movie.id}')" title="Remover">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

// Comments Storage State (LocalStorage)
let commentsStorage = JSON.parse(localStorage.getItem('apex_comments')) || {
  'cyberpunk-apex': [
    { id: 'c1', author: 'Alex Cyber', rating: '🔥 Explosivo', time: 'Há 15 min', text: 'Insano demais! O roteiro de 4 minutos do Kane contra a Apex Tower ficou perfeito demais com as cenas neon!', likes: 24 },
    { id: 'c2', author: 'Mariana VFX', rating: '🔥 Explosivo', time: 'Há 1 hora', text: 'A sincronização das legendas IMAX com o tempo do vídeo está surreal de bom!', likes: 18 }
  ],
  'nitro-overdrive': [
    { id: 'c1', author: 'SpeedRacer', rating: '🔥 Explosivo', time: 'Há 30 min', text: 'Cenas de drift V8 reais na rodovia noturna! Adorei a velocidade!', likes: 15 }
  ],
  'shadow-blade': [
    { id: 'c1', author: 'RoninNinja', rating: '🔥 Explosivo', time: 'Há 45 min', text: 'Combate de katanas sensacional! A animação e o ritmo de luta ficaram nota 10!', likes: 19 }
  ]
};

function renderComments(movieId) {
  const commentsFeed = document.getElementById('commentsFeed');
  const commentsCount = document.getElementById('commentsCount');
  const commentAuthorInput = document.getElementById('commentAuthor');
  
  const savedName = localStorage.getItem('apex_commenter_name');
  if (savedName && commentAuthorInput) {
    commentAuthorInput.value = savedName;
  }

  const movieComments = commentsStorage[movieId] || [];
  if (commentsCount) commentsCount.textContent = movieComments.length;

  if (!commentsFeed) return;

  if (movieComments.length === 0) {
    commentsFeed.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted);">
        <i class="fa-regular fa-comment-dots" style="font-size:2.5rem; margin-bottom:0.5rem; color:var(--text-dim);"></i>
        <p>Seja o primeiro fã a comentar sobre este filme!</p>
      </div>
    `;
    return;
  }

  commentsFeed.innerHTML = movieComments.map(comment => {
    const initial = comment.author ? comment.author.charAt(0).toUpperCase() : 'F';
    return `
      <div class="comment-card">
        <div class="comment-avatar">${initial}</div>
        <div class="comment-content">
          <div class="comment-top-row">
            <span class="comment-author-name">${comment.author}</span>
            <span class="comment-badge-rating">${comment.rating}</span>
            <span class="comment-time">${comment.time}</span>
          </div>
          <p class="comment-body-text">${comment.text}</p>
          <div class="comment-actions-row">
            <button class="comment-like-btn" onclick="likeComment('${movieId}', '${comment.id}')">
              <i class="fa-solid fa-thumbs-up"></i> <span>${comment.likes || 0}</span> Curtidas
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function submitComment(e, movieId) {
  e.preventDefault();
  const authorInput = document.getElementById('commentAuthor');
  const ratingInput = document.getElementById('commentRating');
  const textInput = document.getElementById('commentText');

  const author = authorInput.value.trim();
  const rating = ratingInput.value;
  const text = textInput.value.trim();

  if (!author || !text) return;

  localStorage.setItem('apex_commenter_name', author);

  if (!commentsStorage[movieId]) {
    commentsStorage[movieId] = [];
  }

  const newComment = {
    id: 'c_' + Date.now(),
    author: author,
    rating: rating,
    time: 'Agora mesmo',
    text: text,
    likes: 0
  };

  commentsStorage[movieId].unshift(newComment);
  localStorage.setItem('apex_comments', JSON.stringify(commentsStorage));

  textInput.value = '';
  renderComments(movieId);
}

function likeComment(movieId, commentId) {
  if (commentsStorage[movieId]) {
    const comment = commentsStorage[movieId].find(c => c.id === commentId);
    if (comment) {
      comment.likes = (comment.likes || 0) + 1;
      localStorage.setItem('apex_comments', JSON.stringify(commentsStorage));
      renderComments(movieId);
    }
  }
}

// Open Video Modal & Setup Custom Controls
let currentSpeech = null;
let activeMovieData = null;

function openVideoModal(movieId) {
  const movie = moviesData.find(m => m.id === movieId);
  if (!movie) return;
  activeMovieData = movie;

  const youtubeIframePlayer = document.getElementById('youtubeIframePlayer');
  const btnSourceMp4 = document.getElementById('btnSourceMp4');
  const btnSourceYoutube = document.getElementById('btnSourceYoutube');
  const playerControls = document.querySelector('.player-controls');

  // Reset to MP4 mode by default
  modalVideoPlayer.style.display = 'block';
  youtubeIframePlayer.style.display = 'none';
  youtubeIframePlayer.src = '';
  btnSourceMp4.classList.add('active');
  btnSourceYoutube.classList.remove('active');
  playerControls.style.display = 'flex';

  modalVideoPlayer.src = movie.videoUrl;
  modalMovieTitle.textContent = movie.title;
  modalSynopsis.textContent = movie.synopsis;
  modalDirector.textContent = movie.director;
  modalCast.textContent = movie.cast;
  modalYear.textContent = movie.year;

  modalMetaRow.innerHTML = `
    <span class="badge badge-red">${movie.genre}</span>
    <span class="badge badge-gold"><i class="fa-solid fa-clock"></i> Vídeo HD 4 Min</span>
    <span class="badge badge-gold">🔥 ${movie.rating} / 10</span>
    <span class="badge badge-dark">${movie.duration}</span>
    <span class="badge badge-dark">${movie.ageRating}</span>
    <div class="intensity-meter">
      <span style="font-weight:700; color:#fff; font-size:0.8rem;">AÇÃO:</span>
      <div class="intensity-bar-bg">
        <div class="intensity-bar-fill" style="width: ${movie.actionIntensity}%"></div>
      </div>
      <span style="font-weight:800; color:var(--primary-red); font-size:0.8rem;">${movie.actionIntensity}%</span>
    </div>
  `;

  // Render Comments Section for this Movie
  renderComments(movieId);
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.onsubmit = (e) => submitComment(e, movieId);
  }

  // Media Source Selector Listeners
  btnSourceMp4.onclick = () => {
    btnSourceMp4.classList.add('active');
    btnSourceYoutube.classList.remove('active');
    modalVideoPlayer.style.display = 'block';
    youtubeIframePlayer.style.display = 'none';
    youtubeIframePlayer.src = '';
    playerControls.style.display = 'flex';
    modalVideoPlayer.play().catch(() => {});
  };

  btnSourceYoutube.onclick = () => {
    btnSourceYoutube.classList.add('active');
    btnSourceMp4.classList.remove('active');
    modalVideoPlayer.pause();
    modalVideoPlayer.style.display = 'none';
    youtubeIframePlayer.style.display = 'block';
    youtubeIframePlayer.src = movie.youtubeEmbedUrl || 'https://www.youtube.com/embed/LembwXMflo0?autoplay=1';
    playerControls.style.display = 'none';
  };

  // Share Movie & Theater Mode Button Handlers
  const btnShareMovie = document.getElementById('btnShareMovie');
  const btnToggleTheaterMode = document.getElementById('btnToggleTheaterMode');

  if (btnShareMovie) {
    btnShareMovie.onclick = () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?movie=${movie.id}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('🔗 Link do filme copiado para a área de transferência!');
        }).catch(() => {
          showToast(`Link do filme: ${shareUrl}`);
        });
      } else {
        showToast(`Link do filme: ${shareUrl}`);
      }
    };
  }

  if (btnToggleTheaterMode) {
    btnToggleTheaterMode.onclick = () => {
      videoModalBackdrop.classList.toggle('theater-mode');
      const isTheater = videoModalBackdrop.classList.contains('theater-mode');
      btnToggleTheaterMode.innerHTML = isTheater 
        ? '<i class="fa-solid fa-sun"></i> Luzes On' 
        : '<i class="fa-solid fa-moon"></i> Luzes Off';
      showToast(isTheater ? '🍿 Modo Cinema Ativado (Luzes Apagadas)' : '💡 Modo Padrão Ativado');
    };
  }

  // Storyboard & Narração Handler
  const storyboardSection = document.getElementById('storyboardSection');
  const storyboardChaptersGrid = document.getElementById('storyboardChaptersGrid');
  const activeQuoteText = document.getElementById('activeQuoteText');
  const btnVoiceover = document.getElementById('btnVoiceover');

  if (movie.storyboard && movie.storyboard.length > 0) {
    storyboardSection.style.display = 'block';
    activeQuoteText.textContent = movie.storyboard[0].quote;

    storyboardChaptersGrid.innerHTML = movie.storyboard.map((chapter, idx) => `
      <div class="chapter-card ${idx === 0 ? 'active' : ''}" onclick="jumpToChapter(${chapter.startSec}, '${chapter.quote.replace(/'/g, "\\'")}', this)">
        <span class="chapter-time"><i class="fa-solid fa-clock"></i> ${chapter.time}</span>
        <div class="chapter-title">${chapter.title}</div>
        <div class="chapter-desc">${chapter.desc}</div>
      </div>
    `).join('');

    // Voiceover TTS Setup
    btnVoiceover.onclick = () => toggleVoiceover(movie.narrationScript);
  } else {
    storyboardSection.style.display = 'none';
  }

  videoModalBackdrop.classList.add('active');
  modalVideoPlayer.play().catch(() => {});
  updatePlayButtonIcon();
}

function jumpToChapter(sec, quote, element) {
  modalVideoPlayer.currentTime = sec;
  modalVideoPlayer.play();
  document.getElementById('activeQuoteText').textContent = quote;
  document.querySelectorAll('.chapter-card').forEach(card => card.classList.remove('active'));
  if (element) element.classList.add('active');
}

function toggleVoiceover(scriptText) {
  const btnVoiceover = document.getElementById('btnVoiceover');
  if ('speechSynthesis' in window) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      btnVoiceover.classList.remove('speaking');
      btnVoiceover.innerHTML = '<i class="fa-solid fa-microphone"></i> 🎙️ Ouvir Narração Narrador (Bob)';
    } else {
      const utterance = new SpeechSynthesisUtterance(scriptText);
      utterance.lang = 'en-US';
      utterance.pitch = 0.85; // Deep cinematic pitch
      utterance.rate = 0.95;  // Dramatic pacing
      
      utterance.onstart = () => {
        btnVoiceover.classList.add('speaking');
        btnVoiceover.innerHTML = '<i class="fa-solid fa-square"></i> ⏹️ Parar Narração (Bob)';
      };

      utterance.onend = () => {
        btnVoiceover.classList.remove('speaking');
        btnVoiceover.innerHTML = '<i class="fa-solid fa-microphone"></i> 🎙️ Ouvir Narração Narrador (Bob)';
      };

      window.speechSynthesis.speak(utterance);
    }
  } else {
    alert('Seu navegador não suporta a síntese de voz.');
  }
}

function closeVideoModal() {
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  modalVideoPlayer.pause();
  modalVideoPlayer.src = '';
  videoModalBackdrop.classList.remove('active');
}

// Video Controls Handlers
function updatePlayButtonIcon() {
  if (modalVideoPlayer.paused) {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
}

playPauseBtn.onclick = () => {
  if (modalVideoPlayer.paused) {
    modalVideoPlayer.play();
  } else {
    modalVideoPlayer.pause();
  }
  updatePlayButtonIcon();
};

modalVideoPlayer.ontimeupdate = () => {
  if (modalVideoPlayer.duration) {
    const percent = (modalVideoPlayer.currentTime / modalVideoPlayer.duration) * 100;
    progressFill.style.width = `${percent}%`;
    
    const curMin = Math.floor(modalVideoPlayer.currentTime / 60);
    const curSec = Math.floor(modalVideoPlayer.currentTime % 60).toString().padStart(2, '0');
    const durMin = Math.floor(modalVideoPlayer.duration / 60);
    const durSec = Math.floor(modalVideoPlayer.duration % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${curMin}:${curSec} / ${durMin}:${durSec}`;

    // Auto Sync Subtitles & Chapters for Storyboard
    const currentMovie = moviesData[0]; // Cyberpunk Apex
    if (currentMovie && currentMovie.storyboard) {
      const curTimeSec = modalVideoPlayer.currentTime;
      let activeChapter = currentMovie.storyboard[0];
      
      for (let i = 0; i < currentMovie.storyboard.length; i++) {
        if (curTimeSec >= currentMovie.storyboard[i].startSec) {
          activeChapter = currentMovie.storyboard[i];
        }
      }

      const subtitleElem = document.getElementById('subtitleText');
      const activeQuoteText = document.getElementById('activeQuoteText');
      if (subtitleElem && activeChapter) {
        subtitleElem.textContent = activeChapter.quote;
      }
      if (activeQuoteText && activeChapter) {
        activeQuoteText.textContent = activeChapter.quote;
      }

      // Highlight chapter card
      const cards = document.querySelectorAll('.chapter-card');
      cards.forEach((card, idx) => {
        if (currentMovie.storyboard[idx] === activeChapter) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }
  }
};

progressBar.onclick = (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percent = clickX / rect.width;
  modalVideoPlayer.currentTime = percent * modalVideoPlayer.duration;
};

muteBtn.onclick = () => {
  modalVideoPlayer.muted = !modalVideoPlayer.muted;
  muteBtn.innerHTML = modalVideoPlayer.muted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
};

volumeSlider.oninput = (e) => {
  modalVideoPlayer.volume = e.target.value;
  modalVideoPlayer.muted = (e.target.value === '0');
  muteBtn.innerHTML = modalVideoPlayer.muted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
};

fullscreenBtn.onclick = () => {
  if (modalVideoPlayer.requestFullscreen) {
    modalVideoPlayer.requestFullscreen();
  }
};

// Setup Main Event Listeners
function setupEventListeners() {
  // Search
  searchInput.oninput = (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.classList.toggle('visible', searchQuery.length > 0);
    renderMovies();
  };

  clearSearchBtn.onclick = () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.remove('visible');
    renderMovies();
  };

  // Category Filters
  categoryChips.querySelectorAll('.chip').forEach(chip => {
    chip.onclick = () => {
      categoryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeGenre = chip.dataset.genre;
      renderMovies();
    };
  });

  // Watchlist Drawer
  watchlistBtn.onclick = () => {
    renderFavoritesDrawer();
    favDrawerBackdrop.classList.add('active');
  };

  closeDrawerBtn.onclick = () => {
    favDrawerBackdrop.classList.remove('active');
  };

  favDrawerBackdrop.onclick = (e) => {
    if (e.target === favDrawerBackdrop) {
      favDrawerBackdrop.classList.remove('active');
    }
  };

  // Close Video Modal
  closeVideoModalBtn.onclick = closeVideoModal;
  videoModalBackdrop.onclick = (e) => {
    if (e.target === videoModalBackdrop) {
      closeVideoModal();
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      favDrawerBackdrop.classList.remove('active');
    }
  });
}
