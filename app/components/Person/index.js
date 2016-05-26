import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


export default class Person extends Component {

	render() {
		return (
			<div className={styles.root}>
				
				<header className={styles.header}>

					
					<div className={styles.title}>
						<span className={styles.fullname}>Mentions {this.props.params.id}</span> 
						<i className="fa fa-close" />
					</div>

					<ul className={styles.dropdown}>
						<li><small><strong>Filtre:</strong> Mentions, Surveillance</small></li>
						<li className={styles.current}><strong>vampy mike</strong> <i className="fa fa-angle-down" /></li>
					</ul>


				</header>
				<div className={styles.list}>

					<ul>

						<li>
							<span><i className="fa fa-unlink" /> <strong>Fin de relation</strong></span>
							<span className={styles.date}>A minute ago</span>
							<div className={styles.proof}>
								#XLLKSS SLSDK SKDD2030
							</div>					
						</li>

						<li  className={styles.notice}>
							<span><i className="fa fa-newspaper-o" /> <strong>Apparition Media</strong></span>
							<span className={styles.date}>5 minute ago</span>
							<div className={styles.proof}>
								#XLLKSS SLSDK SKDD2030
							</div>					
						</li>

						<li  className={styles.alert}>
							<span><i className="fa fa-exclamation-circle" /> <strong>Blanchiment détecté</strong></span>
							<span className={styles.date}>10 minute ago</span>
							<div className={styles.proof}>
								#XLLKSS SLSDK SKDD2030
							</div>					
						</li>

						<li  className={styles.positive}>
							<span><i className="fa fa-chevron-circle-down" /> <strong>Namecheck positif</strong></span>
							<span className={styles.date}>May 12, 2016</span>
							<div className={styles.proof}>
								#XLLKSS SLSDK SKDD2030
							</div>						

						</li>

						<li>
							<span><i className="fa fa-comments-o" /> <strong>Comité d'acceptation</strong></span>
							<span className={styles.date}>May 12, 2016</span>
							<div className={styles.proof}>
								#XLLKSS SLSDK SKDD2030
							</div>

						</li>

					</ul>

				</div>

				<div className={styles.help}>
					<p>
						All the namecheck we performed about Mike.<br/>
						Click on a event to display the details and blockchain proof.
					</p>
				</div>		

			</div>
		);
	}
}
