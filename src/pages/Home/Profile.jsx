import { Transition } from "react-transition-group";
import classNames from "classnames";
import { reflow } from "../../utils/transiton";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import DecoderText from "../../components/DecoderText";
import Text from "../../components/Text";
import Link from "../../components/Link";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Image from "../../components/Image";
import ProfileImg from "../../assets/images/profile.jpg";
import ProfileImgLarge from "../../assets/images/profile-large.jpg";
import ProfileImgPlaceholder from "../../assets/images/profile-placeholder.jpg";
import { ReactComponent as KatakanaProfile } from "../../assets/icons/katakana-profile.svg";
import "./Profile.css";
import { medias } from "../../utils/style";

const Profile = ({ id, visible, sectionRef }) => {
  const titleID = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleID}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {(status) => (
          <div className="profile__content">
            <div className="profile__column">
              <Heading
                className={classNames(
                  "profile__title",
                  `profile__title--${status}`
                )}
                level={3}
                id={titleID}
              >
                <DecoderText
                  text="Oi, td bem?"
                  start={status !== "exited"}
                  delay={500}
                />
              </Heading>
              <Text
                className={classNames(
                  "profile__description",
                  `profile__description--${status}`
                )}
                size="l"
              >
                Eu sou Kevin, atualmente moro em Belford Roxo - RJ trabalhando
                como desenvolvedor fullstack{" "}
                <Link href="https://www.qwilr.com">freelancer</Link>. Meus
                projetos incluem design de UX, animações de interface do usuário
                e ilustração de ícones. Estar confortável com o código me
                permite prototipar e validar experiências rapidamente. Se você
                estiver interessado nas ferramentas e softwares que eu uso,
                confira minha página de <Link href="/uses">usos</Link>.
              </Text>
              <Text
                className={classNames(
                  "profile__description",
                  `profile__description--${status}`
                )}
              >
                No meu tempo livre gosto de praticar Jiu Jitsu, jogar videogame
                e <Link href="/projetos/volkihar-knight">fazer mods</Link>.
                Estou sempre ansioso para ouvir sobre novos projetos, então
                sinta-se à vontade para me deixar uma linha.
              </Text>
              <Button
                secondary
                className={classNames(
                  "profile__button",
                  `profile__button--${status}`
                )}
                href="/contato"
                icon="send"
              >
                Me envie uma mensagem
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== "entered"}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    "profile__tag-text",
                    `profile__tag-text--${status}`
                  )}
                >
                  Sobre Mim
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  placeHolder={ProfileImgPlaceholder}
                  srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                  sizes={`(max-width: ${medias.mobile}px) 100vw, 480px`}
                  alt="Tirando uma foto nesta paisagem maravilhosa do rio de janeiro"
                />
                <KatakanaProfile
                  className={classNames(
                    "profile__svg",
                    `profile__svg--${status}`
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
