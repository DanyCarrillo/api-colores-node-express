-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-12-2021 a las 04:29:19
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `multiplicadb`
--
CREATE DATABASE IF NOT EXISTS `multiplicadb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `multiplicadb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `id_status` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `pantone_value` varchar(10) NOT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `color`, `id_status`, `year`, `pantone_value`, `created`, `modified`) VALUES
(1, 'cerulean', '#98B2D1', 1, 2000, '15-4020', NULL, NULL),
(2, 'fuchsia rose', '#C74375', 1, 2001, '17-2031', '2021-12-07 00:19:14', '2021-12-07 00:19:14'),
(3, 'true red', '#BF1932', 1, 2002, '19-1664', '2021-12-07 00:20:25', '2021-12-07 00:20:25'),
(4, 'aqua sky', '#7BC4C4', 1, 2003, '14-4811', '2021-12-07 00:21:09', '2021-12-07 00:21:09'),
(5, 'tigerlily', '#E2583E', 1, 2004, '17-1456', '2021-12-07 00:22:07', '2021-12-07 00:22:07'),
(6, 'blue turquoise', '#53B0AE', 1, 2004, '15-5217', '2021-12-07 00:22:59', '2021-12-07 00:22:59'),
(7, 'sand dollar', '#DECDBE', 1, 2006, '13-1106', '2021-12-07 00:23:51', '2021-12-07 00:23:51'),
(8, 'chili pepper', '#9B1B30', 1, 2007, '19-1557', '2021-12-07 00:24:30', '2021-12-07 00:24:30'),
(9, 'blue iris', '#5A5B9F', 1, 2008, '18-3943', '2021-12-07 00:25:12', '2021-12-07 00:25:12'),
(10, 'mimosa', '#F0C05A', 1, 2009, '14-0848', '2021-12-07 00:26:14', '2021-12-07 00:26:14'),
(11, 'turquoise', '#45B5AA', 1, 2010, '15-5519', '2021-12-07 00:26:16', '2021-12-07 00:26:16'),
(12, 'honeysuckle', '#D94F70', 1, 2011, '18-2120', '2021-12-07 00:26:16', '2021-12-07 00:26:16'),
(13, 'white', '#FFFFFF', 1, 2021, '14-4420', '2021-12-07 13:15:17', '2021-12-07 13:15:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `description` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `description`) VALUES
(1, 'activo'),
(2, 'inactivo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `colors`
--
ALTER TABLE `colors`
  ADD CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
