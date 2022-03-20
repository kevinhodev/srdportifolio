import { Transition } from "react-transition-group";
import classNames from "classnames";
import { reflow } from "../../utils/transiton";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import DecoderText from "../../components/DecoderText";
import Text from "../../components/Text";
import Link from "../../components/Link";
import Button from "../../components/Button";
import "./Profile.css";

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
                  text="Olá, tudo bem?"
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
                className={classNames(
                  "profile__button",
                  `profile__button--${status}`
                )}
                href="/contato"
              >
                Me envie uma mensagem
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
