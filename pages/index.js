import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 50000, easing: (t) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const [slider2Ref] = useKeenSlider({
    slides: {
      perView: 2,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <>
      <Head>
        <title>Home - DripStore</title>
      </Head>
      <h1 className={styles.title}>Bem vindo a DripStore</h1>

      <div className={styles.sport}>
        <div
          ref={sliderRef}
          className={`${"keen-slider"} ${styles.slideproducts}`}
          style={{
            width: `${20}%`,
            height: `${20}%`,
          }}
        >
          <span
            className={`${"keen-slider__slide number-slide1"} ${
              styles.itemslide
            }`}
          >
            <Link href="/products" legacyBehavior>
              <a>
                <Image
                  src="/images/flamengo.webp"
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </a>
            </Link>
            <h3>Camisa Flamengo Torcedor 2022</h3>
          </span>
          <span
            className={`${"keen-slider__slide number-slide2"} ${
              styles.itemslide
            }`}
          >
            <Link href="/products" legacyBehavior>
              <a>
                <Image
                  src="/images/flamengo1.webp"
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </a>
            </Link>
            <h3>Camisa Flamengo Jogador 2023</h3>
          </span>

          <span
            className={`${"keen-slider__slide number-slide3"} ${
              styles.itemslide
            }`}
          >
            <Link href="/products" legacyBehavior>
              <a>
                <Image
                  src="/images/palmeiras.png"
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </a>
            </Link>
            <h3>Camisa Palmeiras Torcedor 2022</h3>
          </span>
          <span
            className={`${"keen-slider__slide number-slide4"} ${
              styles.itemslide
            }`}
          >
            <Link href="/products" legacyBehavior>
              <a>
                <Image
                  src="/images/palmeiras2.png"
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </a>
            </Link>
            <h3>Camisa Palmeiras Torcedor 2023</h3>
          </span>
        </div>
        <div className={styles.desc}>
          <h2>Qualidade no Esporte</h2>
          <p>
            A Dripstore é uma loja que se destaca pela qualidade das suas peças
            de roupa esportivas. Os materiais utilizados são de alta qualidade,
            o que garante a durabilidade das roupas mesmo com o uso frequente e
            intenso. Além disso, a atenção aos detalhes é outro ponto forte da
            loja, já que suas roupas são projetadas para serem confortáveis,
            funcionais e adaptáveis aos movimentos do corpo. A variedade de
            opções disponíveis também é um diferencial, atendendo diferentes
            necessidades e atividades físicas. Por fim, o atendimento de
            qualidade oferecido pela Dripstore aos seus clientes é outro aspecto
            que destaca a loja no mercado de roupas esportivas.
          </p>

          <p>
            A qualidade das peças de roupa esportivas da Dripstore é resultado
            de um processo cuidadoso de seleção de fornecedores e de design. Os
            clientes da loja podem confiar que estão adquirindo roupas feitas
            com materiais duráveis e resistentes, que proporcionam conforto e
            funcionalidade durante a prática de atividades físicas. Com um
            atendimento de qualidade, a Dripstore se destaca como uma opção
            confiável e interessante para quem busca peças de roupa esportivas
            de alta qualidade.
          </p>
        </div>
      </div>

      <div
        ref={slider2Ref}
        className="keen-slider"
        style={{
          opacity: `${10}%`,
        }}
      >
        <div className="keen-slider__slide number-slide1">
          <Image src="/images/estadio.jpg" width={1500} height={300} />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src="/images/estadio2.jpg" width={1500} height={300} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src="/images/estadio.jpg" width={1500} height={300} />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src="/images/estadio2.jpg" width={1500} height={300} />
        </div>
      </div>
    </>
  );
}
