import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


export default class Sidebar extends Component {

	render() {
		return (
			<div className={styles.root}>
				<header>
					<div className={styles.userMeta}>
						<p className={styles.company}> Buildog  <i className="fa fa-angle-down"/> </p>
						<p className={styles.username}>Adrien Remacle</p>
					</div>
				</header>

				<ul className={styles.rooms}>
					<span className={styles.divider}>Salle Réunion</span>
					<li>general</li>
					<li className={styles.current}>acceptation</li>
					<li>surveillance</li>
				</ul>
				<ul>
					<span className={styles.divider}>Messages directs</span>
					<li>blockyc</li>
					<li>aurélie</li>

				</ul>
			</div>
		);
	}
}
