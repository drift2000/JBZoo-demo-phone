<?php
/**
 * Joomla! Content Management System
 *
 * @copyright  (C) 2017 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

namespace Joomla\CMS\MVC\Factory;

defined('JPATH_PLATFORM') or die;

/**
 * Factory to create MVC objects.
 *
 * @since  3.10.0
 */
interface MVCFactoryInterface
{
	/**
	 * Method to load and return a model object.
	 *
	 * @param   string  $name    The name of the model.
	 * @param   string  $prefix  Optional model prefix.
	 * @param   array   $config  Optional configuration array for the model.
	 *
	 * @return  \Joomla\CMS\MVC\Model\BaseModel  The model object
	 *
	 * @since   3.10.0
	 * @throws  \Exception
	 */
	public function createModel($name, $prefix = '', array $config = array());

	/**
	 * Method to load and return a view object.
	 *
	 * @param   string  $name    The name of the view.
	 * @param   string  $prefix  Optional view prefix.
	 * @param   string  $type    Optional type of view.
	 * @param   array   $config  Optional configuration array for the view.
	 *
	 * @return  \Joomla\CMS\MVC\View\View  The view object
	 *
	 * @since   3.10.0
	 * @throws  \Exception
	 */
	public function createView($name, $prefix = '', $type = '', array $config = array());

	/**
	 * Method to load and return a table object.
	 *
	 * @param   string  $name    The name of the table.
	 * @param   string  $prefix  Optional table prefix.
	 * @param   array   $config  Optional configuration array for the table.
	 *
	 * @return  \Joomla\CMS\Table\Table  The table object
	 *
	 * @since   3.10.0
	 * @throws  \Exception
	 */
	public function createTable($name, $prefix = '', array $config = array());
}
