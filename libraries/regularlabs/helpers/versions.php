<?php
/**
 * @package         Regular Labs Library
 * @version         21.11.10834
 * 
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            http://regularlabs.com
 * @copyright       Copyright © 2021 Regular Labs All Rights Reserved
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

/* @DEPRECATED */

defined('_JEXEC') or die;

use RegularLabs\Library\Version as RL_Version;

if (is_file(JPATH_LIBRARIES . '/regularlabs/autoload.php'))
{
	require_once JPATH_LIBRARIES . '/regularlabs/autoload.php';
}

class RLVersions
{
	public static function getFooter($name, $copyright = 1)
	{
		return ! class_exists('RegularLabs\Library\Version') ? '' : RL_Version::getFooter($name, $copyright);
	}

	public static function getPluginXMLVersion($alias, $folder = 'system')
	{
		return ! class_exists('RegularLabs\Library\Version') ? '' : RL_Version::getPluginVersion($alias, $folder);
	}

	public static function getXMLVersion($alias, $urlformat = false, $type = 'component', $folder = 'system')
	{
		return ! class_exists('RegularLabs\Library\Version') ? '' : RL_Version::get($alias, $type, $folder);
	}

	public static function render($alias)
	{
		return ! class_exists('RegularLabs\Library\Version') ? '' : RL_Version::getMessage($alias);
	}
}
