// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  // Verso 1
  { text: "Tú me cambiaste la vida", time: 15 },
  { text: "Desde que llegaste a mí", time: 22 },
  { text: "Eres el sol que ilumina", time: 28 },
  { text: "Todo mi existir", time: 34 },
  { text: "Eres un sueño perfecto", time: 40 },
  { text: "Todo lo encuentro en ti", time: 46 },

  // Coro 1
  { text: "Tú me cambiaste la vida", time: 53 },
  { text: "Y por eso te quiero", time: 59 },
  { text: "Eres todo lo que pedía", time: 65 },
  { text: "Lo que no conocía", time: 71 },
  { text: "Y que en ti descubrí", time: 77 },

  // Verso 2
  { text: "Tú me cambiaste la vida", time: 84 },
  { text: "Pintaste de colores", time: 90 },
  { text: "Mis días y tantas noches", time: 96 },
  { text: "Desde que llegaste tú", time: 102 },

  // Coro 2
  { text: "Tú me cambiaste la vida", time: 109 },
  { text: "Desde que llegaste a mí", time: 115 },
  { text: "Soy tan feliz contigo", time: 121 },
  { text: "Lo que vivo, lo que siento", time: 127 },
  { text: "Todo es tan diferente", time: 133 },
  { text: "Cuando estás tú", time: 139 },

  // Verso 3
  { text: "Tú me cambiaste la vida", time: 146 },
  { text: "Eres mi inspiración", time: 152 },
  { text: "Mi razón de ser", time: 158 },
  { text: "Mi canción", time: 164 },

  // Coro 3
  { text: "Tú me cambiaste la vida", time: 171 },
  { text: "Por ti puedo ser mejor", time: 177 },
  { text: "Todo lo encuentro en ti", time: 183 },

  // Coro extendido
  { text: "Eres todo lo que pedía", time: 190 },
  { text: "Lo que no conocía", time: 196 },
  { text: "Y que en ti descubrí", time: 202 },
  { text: "Tú me cambiaste la vida", time: 208 },
  { text: "Pintaste de colores", time: 214 },
  { text: "Mis días y tantas noches", time: 220 },
  { text: "Desde que llegaste tú", time: 226 },

  // Outro
  { text: "Desde que llegaste tú", time: 230 },
  { text: "Todo cambió...", time: 234 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 234 segundos (3:54)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 234000);
