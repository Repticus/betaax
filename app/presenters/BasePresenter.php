<?php

use Nette\Application\UI\Form;

abstract class BasePresenter extends Nette\Application\UI\Presenter {

	public function beforeRender() {
		$this->template->menu = $this->context->parameters['menuList'];
	}

}

class BaseForm extends Form {

	public function addError($message) {
		$this->valid = FALSE;

		if ($message !== NULL) {
			$messagePresent = FALSE;
			foreach ($this->parent->template->flashes as $value) {
				if ($message == $value->message) {
					$messagePresent = TRUE;
				}
			}

			if (!$messagePresent) {
				$this->parent->flashMessage($message, "error");
			}
		}
	}

}
