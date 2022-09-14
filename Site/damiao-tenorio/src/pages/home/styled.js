import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--colorWhire);
`;

export const Header = styled.header `
    width: 100%;
    display: flex;
    padding-top: 40px;
    align-items: center;
    padding-bottom: 100px;
    flex-direction: column;
    background: var(--colorPrimary);

    .icon-redes {
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 50%;
        font-size: 10px;
        background: var(--colorWhire);
        color: var(--colorPrimary);
        margin-left: 10px;
    }

    .list-infos {
        width: 90%;
        max-width: 1200px;
        display: flex;
        justify-content: end;
        margin-bottom: 40px;

        .bnt-doe-campanha {
            height: 32px;
            padding: 5px;
            border-radius: 20px;
            border: none;
            font-weight: 600;
            padding: 0 10px;
            text-transform: uppercase;
            font-size: 16px;
            background: var(--colorWhire);
            color: var(--colorPrimary);
            margin-left: 10px;
        }
    }

    .container-header {
        width: 90%;
        display: grid;
        padding: 30px;
        min-height: 300px;
        max-width: 1200px;
        align-items: center;
        grid-template-columns: 2.4fr 1.6fr;

        #logo1 {
            margin-left: 50px;
            z-index: 2;
        }

        #logo2 {
            margin-left: -50px;
            z-index: 1;
        }
    }

    .contain-div-button-bottom {
        width: 80%;
        max-width: 1000px;
        display: flex;
        margin-top: -60px;

        .bnt-pq {
            height: 40px;
            border-radius: 20px;
            border: none;
            font-weight: 600;
            padding: 5px 15px;
            text-transform: uppercase;
            font-size: 18px;
            background: var(--colorWhire);
            color: var(--colorPrimary);
        }
    }

    @media (max-width: 1000px) {
        .container-header {
            #logo1 {
                margin-left: 20px;
            }

            #logo2 {
                margin-left: -20px;
            }
        }

        .contain-div-button-bottom {
            .bnt-pq {
                height: 40px;
                padding: 5px 10px;
                text-transform: uppercase;
                font-size: 16px;
            }
        }
    }

    @media (max-width: 600px) {
        .list-infos { 
            flex-direction: column-reverse;
            justify-content: flex-start;
            margin-bottom: 20px;

            .bnt-doe-campanha {
                margin-top: 20px;
            }
        }

        .container-header { 
            grid-template-columns: 4fr;
            #logo1 {
                margin-left: 0px;
            }

            #logo2 {
                margin-top: 40px;
                margin-left: 0px;
            }
        }

        .contain-div-button-bottom {
            margin-top: 0;
            .bnt-pq {
                font-size: 15px;
                line-height: 16px;
            }
        }
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-infos-main {
        width: 90%;
        padding: 80px 0;
        max-width: 1100px;
        align-items: flex-end;
        display: grid;
        grid-template-columns: 2fr 2fr;
        gap: 60px;
    }

    .text-infos-grafics {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 300px;
        padding: 40px 0;
        background-color: var(--colorThird);

        .posi-infos-grafics-limit {
            width: 80%;
            padding: 40px 0;
            padding-bottom: 80px;
            max-width: 1200px;

            h2 {
                max-width: 600px;
                font-size: 50px;
            }

            li {
                font-size: 24px;
                font-weight: 300;
            }

            #graf {
                margin-top: 40px;
            }
        }
    }

    #laco {
        width: 160px;
        height: 180px;
        margin-top: 30px;
        margin-right: -50px;
        transform: rotate(15deg);
    }

    .text-damiao {
        p {
            font-size: 20px;
            font-weight: 400;
        }

        .title-h1 {
            font-size: 60px;
            margin-left: -100px;
        }

        h4, h6 {
            font-size: 24px;
            margin: 0;
            margin-bottom: 20px;
        }

        h6 {
            font-weight: 500;
        }
    }

    .container-informes {
        width: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 60px;
        background: var(--colorPrimary);

        .div-description-infos-simples {
            width: 90%;
            max-width: 800px;
            padding-bottom: 60px;
        }

        .description-infos-simples {
            font-size: 18px;
            color: var(--colorWhire);
            font-weight: 600;
        }

        .cont-header-informes {
            width: 90%;
            max-width: 1200px;
            padding: 40px 60px;
            background: var(--colorWhire);

            h2 {
                font-size: 35px;
                text-align: center;
            }
        }

        .cont-position-numbers-info {
            width: 90%;
            max-width: 800px;
            padding: 40px 0;
            display: grid;
            grid-template-columns: 2fr 2fr;
            gap: 40px;

            .row {
                align-items: center;
            }

            .description-gg {
                font-size: 30px;
                font-weight: bold;
                margin-top: 0px;
                color: var(--colorWhire);
            }

            .number-gg {
                font-size: 160px;
                font-weight: bold;
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
                color: var(--colorThird);
            }

            span {
                max-width: 180px;
                font-size: 22px;
                font-weight: 700;
                margin-left: -80px;
                text-transform: uppercase;
                color: var(--colorWhire);
            }
        }

        .bnt-pq {
            border-radius: 20px;
            border: none;
            font-weight: 600;
            padding: 10px 40px;
            font-size: 20px;
            background: var(--colorWhire);
            color: var(--colorPrimary);
        }
    }

    @media (max-width: 1200px) {
        #laco {
            width: 120px;
            height: 140px;
            margin-top: 10px;
            margin-right: -50px;
            transform: rotate(15deg);
        }

        .text-damiao {
            .title-h1 {
                font-size: 40px;
                margin-left: -60px;
            }  
        }

        .container-informes {
            .cont-header-informes {
                padding: 30px 40px;

                h2 {
                    font-size: 28px;
                }
            }
        }
    }

    @media (max-width: 850px) {
        .container-infos-main {
            width: 80%;
            grid-template-columns: 4fr;
        }

        .text-damiao {
            .title-h1 {
                margin-left: 0px;
            }  
        }

        .text-infos-grafics {
            padding: 20px 0;
            margin-top: 0px;

            .posi-infos-grafics-limit {
                padding: 20px 0;

                h2 {
                    max-width: 600px;
                    font-size: 30px;
                }

                li {
                    font-size: 20px;
                }

                #graf {
                    margin-top: 30px;
                }
            }
        }

        .container-informes {
            .cont-header-informes {
                padding: 20px 40px;

                h2 {
                    font-size: 22px;
                }
            }

            .cont-position-numbers-info {
                width: 60%;
                grid-template-columns: 4fr;
            }

            .bnt-pq {
                width: 80%;
            }
        }
    }

    @media (max-width: 520px) {
        #laco {
            display: none;
        }

        .text-damiao {
            .title-h1 {
                font-size: 30px;
            }  
        }

        .text-infos-grafics {

            .posi-infos-grafics-limit {
                h2 {
                    max-width: 600px;
                    font-size: 26px;
                }

                li {
                    font-size: 18px;
                    line-height: 20px;
                }

                #graf {
                    margin-top: 30px;
                }
            }
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    padding: 20px 60px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 20px;
        font-weight: 300;
        margin: 0;
        text-align: center;
    }

    .container-infos-footer {
        width: 100%;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 2fr 2fr;
        margin-bottom: 20px;
    }

    #saudemental {
        width: 80%;
        max-width: 300px;
        margin-top: -444px;
        margin-bottom: 20px;
    }

    .box-primary-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 40px;
        padding-bottom: 200px;
        background-color: var(--colorThird);

        h2 {
            max-width: 230px;
            font-size: 43px;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            color: #111;
        }

        span {
            max-width: 300px;
            font-size: 26px;
            font-weight: 700;
            text-align: center;
            color: var(--colorWhire);
        }

        .bnt-doe {
            border-radius: 20px;
            border: none;
            font-weight: 600;
            padding: 7px 40px;
            margin-top: 30px;
            font-size: 20px;
            background: var(--colorWhire);
            color: var(--colorThird);
        }
    }

    .box-secundary-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 40px;
        padding-bottom: 200px;

        .row {
            margin-top: 30px;
        }

        h4 {
            max-width: 350px;
            font-size: 30px;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            color: #111;
        }

        span {
            max-width: 380px;
            font-size: 22px;
            font-weight: 700;
            text-align: center;
            color: #111;
        }

        .icon-redes {
            width: 50px;
            height: 50px;
            padding: 10px;
            border-radius: 50%;
            font-size: 20px;
            background: var(--colorBlack);
            color: var(--colorWhire);
            margin-left: 10px;
        }
    }
`;