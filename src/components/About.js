import React from "react";
import Fade from 'react-reveal/Fade';
import "../stylesheets/about.scss";
import uparrow from "../images/up-arrow.svg";
import profilepic from "../images/illustration.png";
import palmtree from "../images/palmtreeicon.png";


const About = () => {
    return ( <section className="section about">
    <div className="titleBox">
    <Fade left cascade> <h2 id="about">about</h2></Fade>
      <img
        className="palmtree sectionPalmtree"
        alt="palmtree"
        src={palmtree}
      ></img>
    </div>
    {/* <div className="about__aboutBackround"></div> */}
    <div className="profile">
      <p className="profile__description">
        Hola, soy Amanda. Encantada!. <br></br>
        <br></br>Vengo del <strong>diseño</strong>, la{" "}
        <strong>gestión cultural</strong>, del sector
        <strong> audiovisual</strong>, y soy <strong>música</strong>.
        Ahora comienzo una nueva y emocionante etapa como{" "}
        <strong>desarrolladora frontend. </strong>Cansada de la
        inestabilidad laboral y en busca de un entorno creativo que me
        permitiera crecer profesionalmente me topé con la programación y
        estoy muy contenta de haberlo hecho. <br></br>
        <br></br>Creo en la cultura y en la tecnología como motores para
        favorecer el entendimiento y la{" "}
        <strong>solución de problemas</strong> entre las personas y su
        entorno, desde el respeto, la empatía y el esfuerzo por mejorar. E
        intento aplicar esto a todo lo que hago, no sólo profesionalmente.{" "}
        <br></br>
        <br></br>
        Me encantan las plantas, y todo ser viviente. Disfruto mucho
        aprendendiendo y creo que no podría vivir (bien) sin humor.
        Actualmente hago música, me sigo formando como front, y busco activamente empleo como desarrolladora.
        Sugerencias, colaboraciones, y por supuesto ofertas laborales son
        bienvenidas.
        <strong> Contacta conmigo</strong> si quieres que nos conozcamos, o para comentar cualquier cosa.
        Será un placer. ;)
       

      </p>
      <div className="profile__skills">
        <i className="slkillIcon fab fa-js"></i>
        <i className="slkillIcon fab fa-react"></i>
        <i className="slkillIcon fab fa-css3-alt"></i>
        <i className="slkillIcon fab fa-html5"></i>
        <i className="slkillIcon fab fa-sass"></i>

        <i className="slkillIcon fab fa-bootstrap"></i>
        <img
          className="slkillIcon"
          alt="git icon"
          src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMjEyMTIxIj48cGF0aCBkPSJtMTAuNzM1IDUuODIzYy0uOTA5LjM2NS0xLjg4Ny42MzItMi44ODIuNjMyLTIuODQ1LTEuNjYxLTYuNzA2LjA3LTYuNzA2IDMuNzA4aC4wMDFjMCAxLjM1Ni44NTYgMy4yMTUgMi4xOTQgMy42N3YuMDU0Yy0uOTk0LjQ0NS0xLjI2OSAyLjcxMS4wNTMgMy41MjV2LjA1NGMtMS40NDQuNDgxLTIuMzk1IDEuNDA4LTIuMzk1IDMuMDA5IDAgMi43NTkgMi41OCAzLjUyNSA0LjgzOSAzLjUyNSAyLjc1MSAwIDQuNzk3LTEuMDAyIDQuNzk3LTQuMDcyIDAtMy43NzctNS4zNDEtMi4zODQtNS4zNDEtNC40MzYgMC0uNzIzLjM4MS0xLjAwMiAxLjA0MS0xLjE0MSAyLjkyMS0uNTQ5IDQuMTEzLTMuNDY3IDMuMzU4LTUuNTI4LjM1NC0uMDguNjk4LS4xNzcgMS4wNDEtLjI5NXptLTQuOTQ5IDEzLjExNnYtLjAwMWMuODk5IDAgMi4xNzkuMTYxIDIuMTc5IDEuMzM5IDAgMS4xNjgtMS4wMzEgMS40MDktMS45OTQgMS40MDktLjkxNSAwLTIuMjktLjE0NS0yLjI5LTEuMzUuMDA1LTEuMTkzIDEuMTY4LTEuMzk3IDIuMTA1LTEuMzk3em0tLjE2OS02LjkzN3YtLjAwMWMtMS4xNjMgMC0xLjY1NS0uNjk2LTEuNjU1LTEuODEgMC0yLjY0MSAzLjIyNi0yLjYxNCAzLjIyNi0uMDI2LS4wMDEgMS4wODctLjQyNCAxLjgzNy0xLjU3MSAxLjgzN3oiLz48cGF0aCBkPSJtMjMgMTcuMjc3di0yLjYyNWMtLjQyMy4yOTUtMS4wMzEuNDQ1LTEuNTQ5LjQ0NS0uOTc4IDAtMS4xNTMtLjk2NS0xLjE1My0xLjc1OHYtNC44OGMxLjY3NyAwIDIuNjk4LjA1NCAyLjY5OC4wNTR2LTIuNTQ2aC0yLjY5OGMwLS43MzQtLjAyNy0xLjQ2Ny4wNzktMi4yMDdoLTIuOTk5Yy4wOTUuNTQ2LjA3OSAxLjAxMy4wNzkgMi4yMDdoLTEuMjY5djIuNTQ1Yy44ODMtLjEzOS44OTktLjA1NCAxLjI2OS0uMDU0di4wNTRoLS4wMjZ2NC42OThjMCAyLjMzLjMzMyA0LjU5MSAzLjE2MiA0LjU5MS43OTQuMDAxIDEuNzA0LS4xMzMgMi40MDctLjUyNHoiLz48cGF0aCBkPSJtMTMuNDkyIDBjLTEuMDU3IDAtMS44MjQuOTMxLTEuODI0IDEuOTY2IDAgMS4wMTguNzc3IDEuOTQgMS44MjQgMS45NCAxLjAyIDAgMS43ODctLjkzNyAxLjc4Ny0xLjk0IDAtMS4wMDEtLjc0MS0xLjk2Ni0xLjc4Ny0xLjk2NnoiLz48cGF0aCBkPSJtMTIuMDE2IDUuOTU3Yy4wOTUuNzkyLjA4NSAxMC42OTkgMCAxMS42NjhoMi45MzZjLS4wODUtLjk2My0uMDk1LTEwLjg4NiAwLTExLjY2OHoiLz48L2c+PC9zdmc+"
        />
        <img
          className="slkillIcon"
          alt="agile icon"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQyMSAzNjAuOTkzLTYwLjkzOS4wMDJjLTE1LjU0NCAyNC4yMDMtMzYuMjY0IDQ0LjY4OS02MC42MTkgNjAuMDEzaDEyMS41NTh2NDQuOTg1bDkxLTc0Ljk4NS05MS03NXoiLz48cGF0aCBkPSJtMTk3LjEzOSA0MjAuOTUxYzkwLjU5My0uNjE5IDE2My44NjEtNzQuMjAyIDE2My44NjEtMTY0Ljk0NCAwLTg2LjA2MS02NS45MTQtMTU2LjY1Ni0xNTAtMTY0LjI0NHYtNDUuNzU2bC05MCA3NSA5MCA3NC45ODV2LTQzLjQ2OWM1MC43NSA3LjM1NyA5MCA1MC43MjkgOTAgMTAzLjQ4NCAwIDU3Ljg5MS00Ny4xMDkgMTA1LTEwNSAxMDVoLTE5NnY2MGgxOTcuMjA3Yy0uMDMtLjAxOC0uMDM5LS4wMzgtLjA2OC0uMDU2eiIvPjxwYXRoIGQ9Im0xMjIuNzQ5IDMzMS4wMDdjLTE5LjUzMi0xOS4wOC0zMS43NDktNDUuNjA4LTMxLjc0OS03NSAwLTM0Ljg2MyAxNy4yNjctNjUuNTk2IDQzLjUwNC04NC43MDNsLTQ3LjEzNy0zOS4yNzZjLTM0LjQ4NCAzMC4yNDItNTYuMzY3IDc0LjUxLTU2LjM2NyAxMjMuOTc5IDAgMjcuMTA1IDYuOTYgNTIuNDQgMTguNTQxIDc1eiIvPjwvZz48L3N2Zz4="
        />
        <i className="slkillIcon fab fa-gulp"></i>
        <div></div>

        <img
          className="slkillIcon"
          alt="photoshop icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIGQ9Ik0xNDkuMzI5LDE0NC44MDJjLTExLjA2OSwwLTE4LjcsMS4xMDUtMjIuNTQ3LDIuMjA5djcxLjY3NA0KCQljNC42OTgsMS4wMSwxMC4zNzQsMS4zNTcsMTguMjU3LDEuMzU3YzI5LjE2OCwwLDQ3LjMtMTQuNzU4LDQ3LjMtMzkuNjY5QzE5Mi4yMTQsMTU4LjA3OSwxNzYuNzk0LDE0NC44MDIsMTQ5LjMyOSwxNDQuODAyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIGQ9Ik0wLDB2NDU1aDQ1NVYwSDB6IE0yMjQuMjE5LDIzNi42OTMNCgkJYy0xOC42MDQsMTcuNTk1LTQ2LjQxNywyNS40NzktNzguODM0LDI1LjQ3OWMtNy4xMjUsMC0xMy42NTQtMC4yNTItMTguNjk4LTAuOTc4djg2Ljg0NEg3Mi4zNTRWMTA4LjQ0NQ0KCQljMTYuODcyLTIuODM3LDQwLjY0Ny01LjA0Niw3NC4xMzYtNS4wNDZjMzMuODk5LDAsNTguMDIxLDYuNDAxLDc0LjE2NywxOS40NTZjMTUuNjQsMTIuMjA0LDI1Ljk4MywzMi40MTcsMjUuOTgzLDU2LjE5NA0KCQlDMjQ2LjY0LDIwMi43OTQsMjM4Ljc1OCwyMjMuMDA3LDIyNC4yMTksMjM2LjY5M3ogTTMwNi4yNywzNTEuNjAxYy0yMy4wNSwwLTQzLjYwOS01LjA0Ny01Ni45MTYtMTIuMjk5bDkuNzQzLTM5LjE5Ng0KCQljMTAuMDkxLDYuMDU1LDMwLjkwNCwxMy4zMDcsNDcuMTczLDEzLjMwN2MxNi40OTIsMCwyMy4zOTgtNS43NywyMy4zOTgtMTQuNzg5YzAtOC45ODgtNS40MjQtMTMuMjc2LTI1Ljg1Ni0yMC4xODINCgkJYy0zNi40ODQtMTIuMjAyLTUwLjUxOC0zMi4wMzgtNTAuMTM5LTUyLjk3NmMwLTMyLjc2MywyOC4wOTYtNTcuNjQ0LDcxLjY3Ni01Ny42NDRjMjAuNTkyLDAsMzguOTQ0LDQuNjY3LDQ5Ljc2LDEwLjA5MQ0KCQlsLTkuNzE0LDM3LjgzOWMtOC4wMDktNC4zMTktMjMuMDUtMTAuMTIyLTM4LjE4NS0xMC4xMjJjLTEzLjMwNywwLTIwLjgxMyw1LjQyNC0yMC44MTMsMTQuNDEyYzAsOC4yNjEsNi43ODEsMTIuNTgxLDI4LjMxOCwyMC4yMTMNCgkJYzMzLjUyLDExLjQ0Niw0Ny41NTIsMjguNDQzLDQ3LjkzMiw1NC4zMzNDMzgyLjY0NiwzMjcuNDc3LDM1Ni42MywzNTEuNjAxLDMwNi4yNywzNTEuNjAxeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        />
        <img
          className="slkillIcon"
          alt="illustrator icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIGQ9Ik0xODYuMTk5LDE1My41NDZjLTMuNTQyLDE0LjI2NC0yNS4wOTIsOTYuNTQ1LTI1LjA5Miw5Ni41NDVoNTIuNzUNCgkJYzAsMC0yMy40NjEtODIuMjgxLTI2Ljk2Ni05Ni41NDVIMTg2LjE5OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMCwwdjQ1NWg0NTVWMEgweiBNMjQwLjAyMywzNTEuNjAxbC0xOC40MjgtNjEuMTE1aC02OC4xOTJsLTE3LjA3NCw2MS4xMTUNCgkJSDgwLjQ1NWw3Mi45NDktMjM4LjMxMmg3MC42MjFsNzMuODg1LDIzOC4zMTJIMjQwLjAyM3ogTTM3Mi43NzQsMzUxLjYwMUgzMTguOTVWMTc4Ljc3NWg1My44MjRWMzUxLjYwMXogTTM0NS41MzMsMTU3LjUwMw0KCQljLTE2LjkzNSwwLTI4LjMxNy0xMi4wNzgtMjcuOTM2LTI2Ljg2Yy0wLjM4MS0xNS41ODMsMTEuMDAyLTI3LjI0NCwyOC4zNTMtMjcuMjQ0YzE3LjM1MiwwLDI4LjE4LDExLjY2LDI4LjU5NSwyNy4yNDQNCgkJQzM3NC41NDUsMTQ1LjQyNSwzNjMuMzAyLDE1Ny41MDMsMzQ1LjUzMywxNTcuNTAzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        />
        <img
          className="slkillIcon"
          alt="video icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4LjVweCIgaGVpZ2h0PSI0OC40OTlweCIgdmlld0JveD0iMCAwIDQ4LjUgNDguNDk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OC41IDQ4LjQ5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00My44MTcsNy44MDZMNDAuNzQsOC42M2wyLjU5OC02Ljc0MmwxLjkzNS0wLjUybC0wLjE0OC0wLjU2M0wwLDEyLjlsMS4yMTcsNC41MzRsMS44MjgtNC43NDlsMy4wNzQtMC44MjdsLTIuNTk3LDYuNzQ0DQoJCQlsLTEuODY0LDAuNWwwLjE0OSwwLjU2M0w0Ni45Myw3LjU3bC0xLjI0LTQuNjMyTDQzLjgxNyw3LjgwNnogTTcuMTY2LDE3LjYyNmwyLjU5Ny02Ljc0NGwzLjA3Ny0wLjgyN2wtMi42MTYsNi43NDlMNy4xNjYsMTcuNjI2eg0KCQkJIE0xMy44ODYsMTUuODNsMi41OTUtNi43NDdsMy4wNjItMC44MTlsLTIuNTk3LDYuNzQzTDEzLjg4NiwxNS44M3ogTTIwLjYwMiwxNC4wMjZsMi41OTktNi43NDRsMy4wNi0wLjgyMmwtMi41OTksNi43NDQNCgkJCUwyMC42MDIsMTQuMDI2eiBNMjcuMzE1LDEyLjIyNmwyLjU5OS02Ljc0MmwzLjA2Mi0wLjgxOWwtMi41OTQsNi43NDFMMjcuMzE1LDEyLjIyNnogTTM0LjAyNCwxMC40MjlsMi42MTQtNi43NDdMMzkuNywyLjg1OA0KCQkJbC0yLjYwMyw2Ljc0N0wzNC4wMjQsMTAuNDI5eiIvPg0KCQk8cGF0aCBkPSJNNDYuNDk4LDI2LjA4OWwtNC4yNTUtNS44NGgzLjE4M2wzLjA3NCw0LjIxNnYtNC44SDEuNzg0djAuNTg0aDEuOTNsNC4yNTMsNS44NEg0Ljc4M2wtMy00LjExN3YyNS43MjJINDguNVYyNi4wODkNCgkJCUg0Ni40OTh6IE0xMS43NDIsMjYuMDg5bC00LjI1My01Ljg0aDMuMTY3bDQuMjcxLDUuODRIMTEuNzQyeiBNMTguNjk4LDI2LjA4OWwtNC4yNTQtNS44NGgzLjE2N2w0LjI1NSw1Ljg0SDE4LjY5OHoNCgkJCSBNMjUuNjU2LDI2LjA4OWwtNC4yNTYtNS44NGgzLjE2M2w0LjI1OCw1Ljg0SDI1LjY1NnogTTMyLjYwOCwyNi4wODlsLTQuMjU3LTUuODRoMy4xNjRsNC4yNTcsNS44NEgzMi42MDh6IE0zOS41NjcsMjYuMDg5DQoJCQlsLTQuMjc0LTUuODRoMy4xODNsNC4yNTYsNS44NEgzOS41Njd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        />
        <div></div>
        <div></div>
        <i className="slkillIcon fas fa-heart"></i>
        <img
          className="slkillIcon"
          alt="music icon"
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNjEgMCA1MTIgNTEyLjAwMDY3IiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTc1IDUxMmM0MS4zNTE1NjIgMCA3NS0zMy42NDQ1MzEgNzUtNzV2LTIzMC41OTc2NTZsMjA5Ljk5NjA5NC03OS43NDYwOTR2MTYwLjczMDQ2OWMtMTIuNTc0MjE5LTkuNTE5NTMxLTI4LjA1MDc4Mi0xNS4zODI4MTMtNDUtMTUuMzgyODEzLTQxLjM1MTU2MyAwLTc1IDMzLjY0NDUzMi03NSA3NC45OTYwOTQgMCA0MS4zNTU0NjkgMzMuNjQ4NDM3IDc1IDc1IDc1IDQxLjM1MTU2MiAwIDc1LTMzLjY0NDUzMSA3NS03NXYtMzMxLjk5NjA5NGMwLTQuOTIxODc1LTIuNDE3OTY5LTkuNTE5NTMxLTYuNDYwOTM4LTEyLjMzMjAzMS00LjAxMTcxOC0yLjc4MTI1LTkuMTgzNTk0LTMuNDU3MDMxLTEzLjgxMjUtMS43MTQ4NDRsLTIzOS45OTYwOTQgOTBjLTUuODQzNzUgMi4xOTUzMTMtOS43MjY1NjIgNy43OTI5NjktOS43MjY1NjIgMTQuMDQ2ODc1djI3Mi4zNzg5MDZjLTEyLjU3NDIxOS05LjUxNTYyNC0yOC4wNTQ2ODgtMTUuMzgyODEyLTQ1LTE1LjM4MjgxMi00MS4zNTE1NjIgMC03NSAzMy42NDg0MzgtNzUgNzVzMzMuNjQ4NDM4IDc1IDc1IDc1em0wIDAiLz48L3N2Zz4="
        />
      </div>
      <div className="profile__imageBox">
        <img className="profileImg" src={profilepic} alt="profile"></img>
      </div>
    </div>
    <div className="arrowBox">
      <a href="#home" className="upArrow">
        <img
          className="upArrow__arrow"
          alt="up arrow"
          src={uparrow}
        ></img>
        <p className="upArrow__upText">up</p>
      </a>
    </div>
  </section>)};


export default About;