import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias=[
    {
      titulo:"Blinken afirma que palestinos deben poder regresar a sus hogares en Gaza",
      subtitulo: "CNN Español",
      descripcion: "El secretario de Estado de Estados Unidos, Antony Blinken, subrayó la importancia de evitar más daños a la población civil y de proteger la infraestructura civil en Gaza en su reunión del martes con el primer ministro de Israel, Benjamin Netanyahu, y el gabinete de guerra en Tel Aviv. Informa Nic Robertson de CNN.",
      imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240110133632-blinken-israel-full-169.jpg?quality=100&strip=info&w=780&h=438&crop=1"
    },
    {
      titulo:"Corea del Sur aprueba prohibir el consumo de carne de perro para 2027",
      subtitulo: "eitb.eus",
      descripcion: "La Asamblea Nacional de Corea del Sur ha aprobado prohibir la cría, matanza, distribución y venta de carne de perro para consumo humano, en lo que supone un triunfo histórico para los defensores de los derechos de los animales tras décadas de lucha en el país asiático.",
      imagen: "https://images14.eitb.eus/multimedia/images/2024/01/09/3189217/20240109094306_txakurrak-korea_amp_w1200.jpg"
    },
    {
      titulo:"Las 5 cosas que debes saber este 10 de enero: declaran conflicto armado interno en Ecuador",
      subtitulo: "CNN Español",
      descripcion: "1. Noboa declara conflicto armado interno en Ecuador      2. Las conclusiones de la audiencia de apelación de Trump 3. ¿Podría esto detener la guerra en Gaza? 4. Lo que pasó con el vuelo de Alaska Airlines, en 4 gráficos 5. La amenaza de las tormentas en EE.UU.",
      imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2024/01/tec-television.jpg?quality=100&strip=info&w=1024"
    },
  ];

  constructor() {}

}

