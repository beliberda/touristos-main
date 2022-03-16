import React from 'react'
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Card from '../../images/visa.png';

const Payment = () => {

    return (
        <div>
            <Header />
            <div class="payment">
      <div class="side-panel"></div>
      <div class="payment-right">
        <p class="payment-right__title">Онлайн оплата</p>
        <div class="payment-right__description">
          Уважаемые туристы, просим оплачивать тур только после подтверждения у
          менеджера компании! Прежде чем оплатить тур онлайн, ознакомьтесь с
          Правилами реализации туристических услуг.<br />
          Оплатив тур, я подтверждаю, что полностью ознакомился с данными
          правилами и согласен с ними!
        </div>
        <div class="payment-right__data">
          <p class="data__title">
            Для оплаты введите ваши данные и выберите удобный для Вас способ
            оплаты:
          </p>
          <section class="data__pay">
            <ul class="pay__input">
              <li class="input__item">
                <p class="input__name">ФИО:</p>
                <input
                  class="input__input-line"
                  type="text"
                  name="FIO"
                  value="Иванов Иван Иванович"
                />
              </li>
              <li class="input__item">
                <p class="input__name">Телефон:</p>
                <input
                  class="input__input-line"
                  type="text"
                  name="Phone"
                  value="+78005553535"
                />
              </li>
              <li class="input__item">
                <p class="input__name">E-mail:</p>
                <input
                  class="input__input-line"
                  type="text"
                  name="E-mail"
                  value="explain@mail.ru"
                />
              </li>
              <li class="input__item">
                <p class="input__name">Услуга:</p>
                <input
                  class="input__input-line"
                  type="text"
                  name="service"
                  value="Тур"
                />
              </li>
              <li class="input__item">
                <p class="input__name">Сумма:</p>
                <input
                  class="input__input-line"
                  type="text"
                  name="toal"
                  value="3200"
                />
              </li>
            </ul>
          </section>
        </div>
        <div class="payment-right__cards">
          <div class="cards__card">
            <input
              class="input__input-radio"
              type="radio"
              name="Card"
              value=""
            />
            <img src={Card} alt="" class="card" />
            <section class="card__info">
              <p class="info__title">Карта Visa</p>
              <p class="info__text">
                Оплата пластиковыми картами Visa. Приём платежей обеспечивает АО
                «Банк Русский Стандарт».
              </p>
            </section>
          </div>
          <div class="cards__card">
            <input
              class="input__input-radio"
              type="radio"
              name="Card"
              value=""
            />
            <img src={Card} alt="" class="card" />
            <section class="card__info">
              <p class="info__title">Карта Visa</p>
              <p class="info__text">
                Оплата пластиковыми картами Visa. Приём платежей обеспечивает АО
                «Банк Русский Стандарт».
              </p>
            </section>
          </div>
        </div>
        <button class="pay__button">Оплатить</button>
      </div>
    </div>
            <Footer />
        </div>
    )
}

export default Payment;