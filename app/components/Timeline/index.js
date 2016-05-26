import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';
import ReactEmoji from 'react-emoji';

import Person from '../Person';
import Message from '../Message';

export default class Timeline extends Component {

	mixins: [
	    ReactEmoji
	]

	render() {
		return (
			<div className={styles.root}>
				<header className={styles.header}>
					
					<span className={styles.title}>
						<h1>acceptation</h1>
						<a>3 membres</a>
					</span>

					<ul>
						<li><i className="fa fa-phone"/></li>
						<li><i className="fa fa-cog"/></li>


						<li className={styles.flex}>
							<input type="text" placeholder="Search" />
						</li>
						<li><i className="fa fa-caret-square-o-left"/></li>
						<li><i className="fa fa-at"/></li>
						<li><i className="fa fa-star-o"/></li>
					</ul>

				</header>

				<content>

				<discuss>
						<ul>
							<ol>
								<li>
									<section className={styles.metas}>
										<strong>adrien</strong>
										<span>7:49 PM</span>
										<thumb><img src={require("./img/adrien.png")}/></thumb>
									</section>

									<section className={styles.message}>
										<p>
										<a className={styles.alert}>@mike vampy 

										</a> souhaite domicilier une soparfi dans nos locaux.
										</p>


									</section>

									<vote>
										<button>Accepter</button> <small>ou</small> <button className={styles.positive}>Refuser</button>
									</vote>

								</li>


								<li>
									<section className={styles.metas}>
										<strong>aurélie</strong>
										<span>7:49 PM</span>
													<thumb><img src={require("./img/aure.JPG")}/></thumb>
									</section>

									<section className={styles.message}>
										<p>La <a className={styles.alert}>surveillance media</a> a reporté une fraude fiscale! { ReactEmoji.emojify(" :bomb: ") }
										</p>
									</section>
								</li>


								<li>
									<section className={styles.metas}>
										<strong>john</strong>
										<span>7:49 PM</span>
													<thumb><img src={require("./img/hans.jpg")}/></thumb>
									</section>

									<section className={styles.message}>
										<p> <a>@mike vampy</a> m'a semblé honnête lors de notre rdv d'hier... { ReactEmoji.emojify(" :-O ") }   </p>
									</section>
								</li>


								<li>
									<section className={styles.metas}>
										<strong>adrien</strong>
										<span>7:49 PM</span>
										<thumb><img src={require("./img/adrien.png")}/></thumb>
									</section>

									<section className={styles.message}>
										<p>On rejette <a>@mike vampy</a>, le risque est trop élevé.</p>
										<p><a className={styles.alert} href="">aurélie</a> tu le notifie de la décision négative?</p>
									</section>
								</li>

								<li>
									<section className={styles.metas}>
										<strong>aurélie</strong>
										<span>7:49 PM</span>
													<thumb><img src={require("./img/aure.JPG")}/></thumb>
									</section>

									<section className={styles.message}>
										<p>
											<a className={styles.alert} href="">@adrien</a> { ReactEmoji.emojify(" Il me demande pourquoi?  ") }
											Je lui partage le lien de l'article?
										</p>
									</section>
								</li>


								<li>
									<section className={styles.metas}>
										<strong>adrien</strong>
										<span>7:49 PM</span>
										<thumb><img src={require("./img/adrien.png")}/></thumb>
									</section>

									<section className={styles.message}>
										<p> { ReactEmoji.emojify(" Non, livre ça à sa sagacité! O:) ") }</p>
									</section>
								</li>

							</ol>
						</ul>

						<div className={styles.messageContainer}>
							<Message/>
						</div>

					</discuss>

					<sidebar>
						<Person params="{id:1}" />
					</sidebar>
				</content>





			</div>

		);
	}
}
