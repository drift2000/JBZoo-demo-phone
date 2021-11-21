<?php
/**
 * JBZoo App is universal Joomla CCK, application for YooTheme Zoo component
 * @package     jbzoo
 * @version     2.x Pro
 * @author      JBZoo App http://jbzoo.com
 * @copyright   Copyright (C) JBZoo.com,  All rights reserved.
 * @license     http://jbzoo.com/license-pro.php JBZoo Licence
 * @coder       Alexander Oganov <t_tapak@yahoo.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');


if ($this->checkPosition('attributes')) {
    echo '<div class="jbprice-tmpl-full">';
    echo $this->renderPosition('attributes');
    echo '</div>';
}

if ($this->checkPosition('price') || $this->checkPosition('buttons')) { ?>
    <div class="jbprice-detail-buy">
        <div class="jbprice-detail-price">
            <?php echo $this->renderPosition('price'); ?>
        </div>
    </div>

    <div class="jbprice-detail-buttons">
        <?php echo $this->renderPosition('buttons'); ?>
    </div>
<?php }