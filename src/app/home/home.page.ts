import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from '@ionic/angular';
import {Noticias, NoticiasMostrar} from '../interfaces/noticias.interface'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categoria:string;
  filtro:string;
  name: any;
  palabraBuscar: "";
  arrayNoticias: Noticias[]=[
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651621748549/sites/diariodecuyo/img/2022/05/03/combustibles_2_crop1577793575531_crop1651621747283.jpg_1536916664.jpg',
    subtitulo:'Si bien todas las jurisdicciones mostraron un crecimiento con respecto al año pasado, la provincia fue uno de los más bajos.',
    titulo:'San Juan quedó antepenúltima en un ranking en los despachos de combustible',
    contenido:' San Juan en marzo tuvo un salto interanual del 13% pero en acumulado trimestral tuvo uno de los tres peores desempeños de las 24 jurisdicciones con un alza de solo el 9,8%.',
    categoria:'Economia'
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651619614348/sites/diariodecuyo/img/2022/05/03/racing_crop1651619613636.jpg_1536916664.jpg',
    subtitulo:'La Academia se lo dio vuelta a Cuiabá y se impuso 2-1 como visitante.',
    titulo:'Racing consiguió un triunfazo en Brasil y sigue peleando por clasificar',
    contenido:' Racing volvió a la victoria justo cuando más lo necesitaba, al vencer esta noche como visitante a Cuiabá, por 2 a 1, dando vuelta en el segundo tiempo, con los goles de Aníbal Moreno y Enzo Copetti',
    categoria: 'Deporte'
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651599378129/sites/diariodecuyo/img/2022/05/03/secuestro.jpg_1536916664.jpg',
    subtitulo:'Le imputaron el delito de privación ilegítima de la libertad agravada.',
    titulo:'Detienen a un sujeto que presuntamente intentó secuestrar a una niña de 7 años',
    contenido:'Un sujeto comenzó hoy a ser juzgado porque presuntamente intentó secuestrar a una niña de 7 años en Capital.Según fuentes judiciales, el acusado es un hombre identificado como Julio Sebastián Castillo, a quien le imputan el delito de privación ilegítima de la libertad agravada.La causa es tratada en el fuero de Flagrancia, ya que Castillo fue detenido momentos después del hecho.',
    categoria:'Policial'

  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651580614514/sites/diariodecuyo/img/2022/05/03/sergiomauricio.jpg_1536916664.jpg',
    subtitulo:'La cena anual congregó a unos mil referentes que analizaron la realidad económica y política del país. ',
    titulo:'Uñac participó del encuentro de empresarios y políticos organizado por la CIPPEC',
    contenido:'La cena anual del Centro de Implementación de Políticas Públicas para la Equidad y el Crecimiento (Cippec) congregó a cerca de 1.000 invitados, entre dirigentes políticos del oficialismo y la oposición, funcionarios y ex funcionarios del Gobierno nacional.',
    categoria:'Politica'
  
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1597676302554/sites/diariodecuyo/img/2020/08/17/117715393_1452271134983624_5806394488806550948_n.jpg_1536916664.jpg',
    subtitulo:' ',
    titulo:'Al disfrute de la naturaleza',
    contenido:'Parador Punta Negra ofrece una experiencia única al disfrute de la naturaleza, la tranquilidad y el paisaje que solo el Embarcadero del Dique Punta Negra puede brindar. ',
    categoria:'Social'
    
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651617512257/sites/diariodecuyo/img/2022/05/03/mh2_2641.jpg_1536916664.jpg',
    subtitulo:' Con respecto al último reporte semanal (18 contagios), el crecimiento es mínimo.',
    titulo:'Coronavirus en San Juan: 21 casos en la última semana y solo un paciente internado',
    contenido:'El Ministerio de Salud Pública de la provincia dio a conocer los números de coronavirus registrados en la semana epidemiológica Nº17 (24 al 30 de abril), dentro de lo que es esta nueva metodología del Gobierno para comunicar las contingencias del virus. ',
    categoria: 'Social'
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651610044063/sites/diariodecuyo/img/2022/05/03/dolar-blue.jpg_1536916664.jpg',
    subtitulo:'En el mercado bursátil, el dólar contado con liquidación (CCL) baja 1,7%, a $ 207,52; mientras que el MEP cae 1,9%, a $ 206,13, en el tramo final de la rueda. ',
    titulo:'El dólar blue saltó dos pesos y el oficial tuvo una suba de 40 centavos',
    contenido:'La cotización del dólar oficial cerró hoy en $121,33, con una suba de 40 centavos en relación a la víspera, mientras los dólares bursátiles -contado con liquidación y MEP- marcan bajas de hasta 1,9%. ',
    categoria:'Economia'
    
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651620134437/sites/diariodecuyo/img/2022/05/03/10dbbcc2a0a7fcc1ac27b14deaa76c22144f1ca3.jpg_1536916664.jpg',
    subtitulo:'La fecha 14 comenzará el viernes y finalizará el lunes.',
    titulo:'Copa de la Liga: el sábado se definirá la zona B y el domingo será el turno de la A',
    contenido:'Las dos plazas pendientes de la zona B de la Copa de la Liga Profesional de Fútbol (LPF) se resolverán el sábado y el domingo se jugará la mayoría de los partidos definitorios de la zona A, según determinó hoy la organización. ',
    categoria:'Deportes'
    
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651024905431/sites/diariodecuyo/img/2022/04/26/ddc270422-003f02.jpg_1536916664.jpg',
    subtitulo:'El gremio pidió que se aplique una multa diaria a los funcionarios que no cumplen con la orden judicial.',
    titulo:'Por demoras en el Concejo, UPCN fue a la Justicia para entrar en la paritaria de Rawson',
    contenido:'El gremio de UPCN, que conduce José "Pepe" Villa, dio un paso más para ser incluido en la paritaria dentro del municipio de Rawson. Si bien existe una resolución judicial que ordena a la comuna a sumar a la Unión Personal Civil de la Nación en la negociación salarial, desde el sindicato entienden que no hubo avances, por lo que, según manifestaron, pidieron a la Justicia que se aplique una multa diaria "a todo funcionario municipal que por acción y omisión no realice los actos pertinente para que se aplique la sentencia ',
    categoria: 'Politica'
    
  },
  {
    imagen: 'https://www.diariodecuyo.com.ar/__export/1651612531009/sites/diariodecuyo/img/2022/05/03/whatsapp_image_2022-05-03_at_5_41_52_pm.jpeg_1536916664.jpeg',
    subtitulo:'Ocurrió en la tarde de este martes en Sarmiento e Ignacio de la Roza. La víctima es un hombre de 70 años.',
    titulo:'En apenas segundos le robaron el auto en el microcentro cuando se bajó al banco',
    contenido:'Un hombre de 70 años sufrió en la tarde de este martes el robo de su auto en pleno microcentro. Fue en apenas segundos y a plena luz del día, pues ocurrió a eso de las 17.',
    categoria:'Policial'
    
  },
  ];
    Buscar: NoticiasMostrar []=[
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651621748549/sites/diariodecuyo/img/2022/05/03/combustibles_2_crop1577793575531_crop1651621747283.jpg_1536916664.jpg',
      subtitulo:'Si bien todas las jurisdicciones mostraron un crecimiento con respecto al año pasado, la provincia fue uno de los más bajos.',
      titulo:'San Juan quedó antepenúltima en un ranking en los despachos de combustible',
      contenido:' San Juan en marzo tuvo un salto interanual del 13% pero en acumulado trimestral tuvo uno de los tres peores desempeños de las 24 jurisdicciones con un alza de solo el 9,8%.',
      categoria:'Economia'
      
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651619614348/sites/diariodecuyo/img/2022/05/03/racing_crop1651619613636.jpg_1536916664.jpg',
      subtitulo:'La Academia se lo dio vuelta a Cuiabá y se impuso 2-1 como visitante.',
      titulo:'Racing consiguió un triunfazo en Brasil y sigue peleando por clasificar',
      contenido:' Racing volvió a la victoria justo cuando más lo necesitaba, al vencer esta noche como visitante a Cuiabá, por 2 a 1, dando vuelta en el segundo tiempo, con los goles de Aníbal Moreno y Enzo Copetti',
      categoria: 'Deporte'
      
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651599378129/sites/diariodecuyo/img/2022/05/03/secuestro.jpg_1536916664.jpg',
      subtitulo:'Le imputaron el delito de privación ilegítima de la libertad agravada.',
      titulo:'Detienen a un sujeto que presuntamente intentó secuestrar a una niña de 7 años',
      contenido:'Un sujeto comenzó hoy a ser juzgado porque presuntamente intentó secuestrar a una niña de 7 años en Capital.Según fuentes judiciales, el acusado es un hombre identificado como Julio Sebastián Castillo, a quien le imputan el delito de privación ilegítima de la libertad agravada.La causa es tratada en el fuero de Flagrancia, ya que Castillo fue detenido momentos después del hecho.',
      categoria:'Policial'
      
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651580614514/sites/diariodecuyo/img/2022/05/03/sergiomauricio.jpg_1536916664.jpg',
      subtitulo:'La cena anual congregó a unos mil referentes que analizaron la realidad económica y política del país. ',
      titulo:'Uñac participó del encuentro de empresarios y políticos organizado por la CIPPEC',
      contenido:'La cena anual del Centro de Implementación de Políticas Públicas para la Equidad y el Crecimiento (Cippec) congregó a cerca de 1.000 invitados, entre dirigentes políticos del oficialismo y la oposición, funcionarios y ex funcionarios del Gobierno nacional.',
      categoria:'Politica'
      
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1597676302554/sites/diariodecuyo/img/2020/08/17/117715393_1452271134983624_5806394488806550948_n.jpg_1536916664.jpg',
      subtitulo:' ',
      titulo:'Al disfrute de la naturaleza',
      contenido:'Parador Punta Negra ofrece una experiencia única al disfrute de la naturaleza, la tranquilidad y el paisaje que solo el Embarcadero del Dique Punta Negra puede brindar. ',
      categoria:'Social'
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651617512257/sites/diariodecuyo/img/2022/05/03/mh2_2641.jpg_1536916664.jpg',
      subtitulo:' Con respecto al último reporte semanal (18 contagios), el crecimiento es mínimo.',
      titulo:'Coronavirus en San Juan: 21 casos en la última semana y solo un paciente internado',
      contenido:'El Ministerio de Salud Pública de la provincia dio a conocer los números de coronavirus registrados en la semana epidemiológica Nº17 (24 al 30 de abril), dentro de lo que es esta nueva metodología del Gobierno para comunicar las contingencias del virus. ',
      categoria: 'Social'
      
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651610044063/sites/diariodecuyo/img/2022/05/03/dolar-blue.jpg_1536916664.jpg',
      subtitulo:'En el mercado bursátil, el dólar contado con liquidación (CCL) baja 1,7%, a $ 207,52; mientras que el MEP cae 1,9%, a $ 206,13, en el tramo final de la rueda. ',
      titulo:'El dólar blue saltó dos pesos y el oficial tuvo una suba de 40 centavos',
      contenido:'La cotización del dólar oficial cerró hoy en $121,33, con una suba de 40 centavos en relación a la víspera, mientras los dólares bursátiles -contado con liquidación y MEP- marcan bajas de hasta 1,9%. ',
      categoria:'Economia'
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651620134437/sites/diariodecuyo/img/2022/05/03/10dbbcc2a0a7fcc1ac27b14deaa76c22144f1ca3.jpg_1536916664.jpg',
      subtitulo:'La fecha 14 comenzará el viernes y finalizará el lunes.',
      titulo:'Copa de la Liga: el sábado se definirá la zona B y el domingo será el turno de la A',
      contenido:'Las dos plazas pendientes de la zona B de la Copa de la Liga Profesional de Fútbol (LPF) se resolverán el sábado y el domingo se jugará la mayoría de los partidos definitorios de la zona A, según determinó hoy la organización. ',
      categoria:'Deportes'
    
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651024905431/sites/diariodecuyo/img/2022/04/26/ddc270422-003f02.jpg_1536916664.jpg',
      subtitulo:'El gremio pidió que se aplique una multa diaria a los funcionarios que no cumplen con la orden judicial.',
      titulo:'Por demoras en el Concejo, UPCN fue a la Justicia para entrar en la paritaria de Rawson',
      contenido:'El gremio de UPCN, que conduce José "Pepe" Villa, dio un paso más para ser incluido en la paritaria dentro del municipio de Rawson. Si bien existe una resolución judicial que ordena a la comuna a sumar a la Unión Personal Civil de la Nación en la negociación salarial, desde el sindicato entienden que no hubo avances, por lo que, según manifestaron, pidieron a la Justicia que se aplique una multa diaria "a todo funcionario municipal que por acción y omisión no realice los actos pertinente para que se aplique la sentencia ',
      categoria: 'Politica'
    },
    {
      imagen: 'https://www.diariodecuyo.com.ar/__export/1651612531009/sites/diariodecuyo/img/2022/05/03/whatsapp_image_2022-05-03_at_5_41_52_pm.jpeg_1536916664.jpeg',
      subtitulo:'Ocurrió en la tarde de este martes en Sarmiento e Ignacio de la Roza. La víctima es un hombre de 70 años.',
      titulo:'En apenas segundos le robaron el auto en el microcentro cuando se bajó al banco',
      contenido:'Un hombre de 70 años sufrió en la tarde de este martes el robo de su auto en pleno microcentro. Fue en apenas segundos y a plena luz del día, pues ocurrió a eso de las 17.',
      categoria:'Policial'   
    },
    ];
  num_noticias: number=2;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private menuCtrl: MenuController) {}
  ngOnInit(): void{
  
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  mostrarNoticias(event){
    setTimeout(() => {
      if(this.num_noticias < this.arrayNoticias.length){
        this.num_noticias++; 
        event.target.complete();
      }else{
        this.infiniteScroll.disabled=true;
      }
    }, 1000);
  }
  hayFocus() {}
  hayionBlur(){}
  buscar(){
    console.log(this.palabraBuscar)
    this.Buscar = [];
    for(let i =0; i< this.arrayNoticias.length; i++){
        if( this.arrayNoticias[i].titulo.startsWith(this.palabraBuscar)){
          this.Buscar.push(this.arrayNoticias[i]);
        }
    }
  }
}
