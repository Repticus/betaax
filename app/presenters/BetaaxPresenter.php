<?php

use Nette\Application\UI\Form,
	 Nette\Utils\Finder,
	 Nette\Mail\Message;

class BetaaxPresenter extends BasePresenter {

	public function actionFoliovaReklama() {
		$this->template->gallery = $this->getGalleryImages("foliova-reklama");
	}

	public function actionFotoTisk() {
		$this->template->gallery = $this->getGalleryImages("fototisk");
	}

	public function actionSvetelnaReklama() {
		$this->template->gallery = $this->getGalleryImages("svetelna-reklama");
	}

	public function actionProstorovaReklama() {
		$this->template->gallery = $this->getGalleryImages("3d-reklama");
	}

	public function actionVelkoplosnyTisk() {
		$this->template->gallery = $this->getGalleryImages("velkoplosny-tisk");
	}

	public function actionPotiskPredmetu() {
		$this->template->gallery = $this->getGalleryImages("potisk-predmetu");
	}

	protected function getGalleryImages($name) {
		try {
			$gallery = array();
			foreach (Finder::findFiles("*.jpg")->in("glr/" . $name . "/sm") as $file) {
				$filename = $file->getFilename();
				if (file_exists("glr/" . $name . "/fl/" . $filename)) {
					$index = substr_replace($file->getFilename(), "", -4);
					$gallery[$index]['sm'] = "glr/" . $name . "/sm/" . $filename;
					$gallery[$index]['fl'] = "glr/" . $name . "/fl/" . $filename;
				}
			}
			ksort($gallery);
			return $gallery;
		} catch (Exception $e) {
			return array();
		}
	}

	protected function createComponentSendQuestion() {
		$form = new BaseForm();
		$form->addText('name', 'Jméno', NULL, 100)
				  ->setAttribute('placeholder', 'Jméno a přijmení')
				  ->setRequired('Zadejte jméno a přijmení.');
		$form->addText('email', 'Email', NULL, 60)
				  ->setAttribute('placeholder', 'Email')
				  ->setRequired('Zadejte email na který Vám odpovíme.')
				  ->addRule(Form::EMAIL, 'Email není správně vyplněn.');
		$form->addText('subject', 'Předmět', NULL, 100)
				  ->setAttribute('placeholder', 'Předmět');
		$form->addTextArea('message', 'Zpráva', NULL, NULL)
				  ->setAttribute('placeholder', 'Zpráva')
				  ->setRequired('Zadejte text zprávy.')
				  ->addRule(Form::MAX_LENGTH, 'Zprava je příliš dlouhá. Povoleno je maximálně 1000 znaků.', 1000);
		$form->addHidden('spamtest')
				  ->addRule($form::EQUAL, 'Robot', array(NULL));
		$form->addSubmit('send', 'Odeslat');
		$form->onSuccess[] = callback($this, 'submitSendQuestion');
		return $form;
	}

	public function submitSendQuestion($form) {
		$formData = $form->getValues();
		unset($formData['spamtest']);
		$this->sendQuestion($formData);
		$flashMessage = "Děkujeme, Vaše zpráva byla úspěšně odeslána.";
		$this->flashMessage($flashMessage, 'success');
		$this->redirect('this');
	}

	public function sendQuestion($formData) {
		$template = $this->createTemplate();
		$template->setFile(__DIR__ . "/../templates/Mail/sendQuestion.latte");
		$template->formData = $formData;
		$mail = new Message;
		$mail->setFrom($formData->email, $formData->name)
				  ->addTo('betaax@betaax.cz', 'Reklamní agentura BETA AX')
				  ->setHtmlBody($template)
				  ->send();
	}

}
