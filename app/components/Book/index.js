import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


export default class Book extends Component {

	render() {
		return (
			<div className={styles.root}>

				{/*
				<header>
					<form>
						<input type="text" placeholder="Enter here a person's fullname." autofocus />
					</form>
				</header>
				*/ }

				<div className={styles.tips}>
					<span>
						<strong>Let's fill your <i className="fa fa-book icon" /> NameBook. </strong>
						<p> 
						we realtime namecheck each <br />name in your book.</p>
						<small>Learn more.</small>
					</span>
				</div>


				<div className={styles.list}>
					<ul>

						{/*
						<li className={styles.notice}>
							<span><strong>LINK</strong> Surname</span>
							<span className={styles.organisation}> 
								<i className="fa fa-link" /> 
								Linked to VAMPY Mike
							</span>
						</li>
						*/}	
						<Link to={"/person/2"}>						
						<li>
							<span><strong>DOE</strong> John</span>
							<span className={styles.organisation}>Company Sa</span>
						</li>
						</Link>
						<Link to={"/person/3"}>
						<li>
							<span><strong>REMACLE</strong> Adrien</span>
							<span className={styles.organisation}>Buildog SPRL</span>
						</li>	
						</Link>	
						<Link to={"/person/1"}>
							<li className={styles.alert}>

								<span><strong>VAMPY</strong> Mike</span>
								<span className={styles.organisation}> 
									<i className="fa fa-exclamation-circle" /> 
									AML alert
								</span>
							</li>
						</Link>


					</ul>
				</div>




			</div>
		);
	}
}
