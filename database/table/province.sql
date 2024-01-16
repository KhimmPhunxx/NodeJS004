
-- Table: declare cambodia province
INSERT INTO 
    `province` (`name`,`description`)
VALUE 
    ('Phnom Penh',' Delivery in Phnom Penh'),
    ('Banteay Meanchey',''),
    ('Battambang','batham bong'),
    ('Kampong Cham',' Delivery in Kampong Cham'),
    ('Kampong Chhnang',' Delivery in Kampong Chhnang'),
    ('Kampong Speu',' Delivery in Kampong Speu'),
    ('Kampong Thom',' Delivery in Kampong Thom'),
    ('Kampot',' Delivery in Kampot'),
    ('Kandal',' Delivery in Kandal'),
    ('Kep',' Delivery in Kep'),
    ('Koh Kong',' Delivery in Koh Kong'),
    ('Kratie',' Delivery in Kratie'),
    ('Mondulkiri',' Delivery in Mondulkiri'),
    ('Oddar Meanchey (Kerry)',' Delivery in Oddar Meanchey Kery'),
    ('Oddar Meanchey (Other)',' Delivery in Oddar Meanchey Other'),
    ('Pailin',' Delivery in Pailin'),
    ('Preah Vihear',' Delivery in Preah Vihear'),
    ('Prey Veng',' Delivery in Prey Veng'),
    ('Pursat',' Delivery in Pursat'),
    ('Ratanakiri',' Delivery in Ratanakiri'),
    ('Siem Reap',' Delivery in Siem Reap'),
    ('Sihanoukville',' Delivery in Sihanoukville'),
    ('Stung Treng',' Delivery in Stung Treng'),
    ('Svay Rieng',' Delivery in Svay Rieng'),
    ('Takeo',' Delivery in Takeo'),
    ('Tboung Khmum',' Delivery in Tboung Khmum');



CREATE TABLE `order`(
    `order_id` INT(11) NOT NULL,
    `customer_id` INT(11) NOT NULL,
    `order_status_id` INT(11) NOT NULL,
    `payment_method_id` INT(11) NOT NULL,
    `invoice_no` VARCHAR(255) NOT NULL,
    `order_total` DECIMAL(15,0) NOT NULL,
    `comment` TEXT DEFAULT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `telephone` VARCHAR(18) NOT NULL,
    `address_des` TEXT NOT NULL,
    `status` TINYINT(1) DEFAULT NULL,
    `create_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `order`
    ADD PRIMARY KEY (`order_id`),
   
ALTER TABLE `order`
    MODIFY `order_id` INT(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `customer_address` ADD CONSTRAINT `fk_customer` 
FOREIGN KEY (`customer_id`) REFERENCES customer(`customer_id`)
ON DELETE CASCADE ;


INSERT INTO `payment_method` (`name`, `code`) VALUE
('Cash on delivery', 'cod'),
('ABA BANK', 'aba'),
('WINK', 'wing'),
('ACLEDA Bank', 'ac'),
('CHIP MONG BANK', 'chm'),
('TURE MONEY', 'tm');

INSERT INTO `order_status` (`name`, `message`, `sort_order`) VALUES
('Pending', 'Your order has been placed successfully!', 1),
('Packed', 'Your order has been packed.', 2),
('Shipped', 'Your order has been shipped.', 3),
('Delivered', 'Your order has been complete.', 4),
('Canceled', 'Your order has been canceled.', 5),
('Store pickup', 'Your order is ready for pickup.', 6);
('Phone denied', 'Denied phone denied.', 7);
('Cancel', 'Your has been Canceled.', 8);



-- function: inner join order and cart to product
sql = "SELECT * FROM cart c";
sql += " INNER JOIN product p ON c.product_id = p.product_id";



"customer_id" : ,
"customer_address_id" : ,
"payment_method_id" : ,
"comment" : "",



ALTER TABLE `role` 
    ADD UNIQUE KEY (`name`);  -- can't have duplicate name in the same table

ALTER TABLE `role`
    ADD UNIQUE KEY (`code`); -- can't have duplicate code in the same table

INSERT INTO `role` (`name`, `code`) VALUES
('Admin', 'admin'),
('Manager', 'manager'),
('Accountant', 'accountant'),
('Online Staff', 'online_staff');


ALTER TABLE `permission` 
    ADD UNIQUE KEY (`name`);  

ALTER TABLE `permission`
    ADD UNIQUE KEY (`code`); 

-- CRUD c:create, r:read, u:update, d:delete

CREATE TABLE `role_permission` (
    `role_id` INT(11) NOT NULL,
    `permission_id` INT(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

ALTER TABLE `role_permission`
    ADD PRIMARY KEY (`role_id`,`permission_id`);


ALTER TABLE `permission` DROP INDEX `name`;

INSERT INTO `permission` (`name`, `code`, `group`) VALUES
('Create', 'crate.product', 'product'),
('Read', 'read.product', 'product'),
('Update', 'update.product', 'product'),
('Delete', 'delete.product', 'product'),

('Create', 'crate.order', 'order'),
('Read', 'read.order', 'order'),
('Update', 'update.order', 'order'),
('Delete', 'delete.order', 'order'),

('Create', 'crate.customer', 'customer'),
('Read', 'read.customer', 'customer'),
('Update', 'update.customer', 'customer'),
('Delete', 'delete.customer', 'customer'),


INSERT INTO `role_permission` (`role_id`, `permission_id`) VALUES

-- role admin

(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),

-- role online staff

(4, 1),
(4, 5),
(4, 6);

-- Table INNER JOIN
SELECT
	c.firstname,
    c.lastname,
    r.name as role_name,
    rp.permission_id,
    p.name
FROM customer c
INNER JOIN role r ON (c.role_id = r.role_id) 
INNER JOIN role_permission rp on r.role_id = rp.role_id
INNER JOIN permission p ON rp.permission_id = p.permission_id
WHERE c.customer_id = 34;

INSERT INTO `permission` (`name`, `code`, `group`) VALUES
('Create', 'crate.category', 'category'),
('Read', 'read.category', 'category'),
('Update', 'update.category', 'category'),
('Delete', 'delete.category', 'category'),

INSERT INTO `role_permission` (`role_id`, `permission_id`) VALUES

(4, 13),
(4, 14);