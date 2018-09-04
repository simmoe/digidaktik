-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 04, 2018 at 02:12 PM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moe`
--

-- --------------------------------------------------------

--
-- Table structure for table `Begivenhed`
--

CREATE TABLE `Begivenhed` (
  `id` int(11) NOT NULL,
  `titel` varchar(255) NOT NULL,
  `dato` date NOT NULL,
  `pladser` int(6) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `slut` datetime DEFAULT NULL,
  `beskrivelse` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Begivenhed`
--

INSERT INTO `Begivenhed` (`id`, `titel`, `dato`, `pladser`, `adresse`, `start`, `slut`, `beskrivelse`) VALUES
(3, 'LAN nr 1', '2018-10-06', 80, NULL, NULL, NULL, NULL),
(4, 'LAN nr 2', '2018-11-10', 60, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Person`
--

CREATE TABLE `Person` (
  `id` int(11) NOT NULL,
  `fornavn` varchar(255) NOT NULL,
  `efternavn` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefon` int(8) DEFAULT NULL,
  `brugernavn` varchar(255) NOT NULL,
  `password` varchar(1055) NOT NULL,
  `salt` varchar(1055) NOT NULL,
  `alder` int(11) NOT NULL,
  `køn` enum('M','K') NOT NULL DEFAULT 'M'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Person`
--

INSERT INTO `Person` (`id`, `fornavn`, `efternavn`, `adresse`, `email`, `telefon`, `brugernavn`, `password`, `salt`, `alder`, `køn`) VALUES
(9, 'Admin', 'Hansen', 'Slotshaven 1, 4300 Holbæk', 'admin@slottet.dk', 32323232, 'admin', 'c51b03cdcc0748ace6bea97990056ded2f2d53fef7aa1c0114ccb1644eeaa464', 'fc6d10f6873528ac463dd45a258980a67345549fd482c1e563cadff221fb9c7e', 21, 'K'),
(16, 'Frivillig', 'Festabe', 'Sønder Boulevard 114, 3.tv', 'fri@gmail.com', 93989832, 'frivillig', '25b6123c2c3ed1c9f6ee0ca9b1b37b0a7770b19c61622dc5f5d8f63a25a21f61', '389316e7e9c2517c60bc8ac2cd68e26916b0be01248a9b5489fde9e58390dd8c', 12, 'M'),
(17, 'Deltager', 'McFeast', 'Holbæk Torv, 6', 'deltager@mac.dk', 54545454, 'deltager', '7954ef68b67cfff0d870a829aa26560fd908941f5bdef0e7b04dbf4d3b99f3b2', '5a755b3287794364495a822aef5e03c906a6e8ff0cf7bf2c0b9ae27fc7b39070', 12, 'K');

-- --------------------------------------------------------

--
-- Table structure for table `Person_Rolle`
--

CREATE TABLE `Person_Rolle` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `rolle_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Person_Rolle`
--

INSERT INTO `Person_Rolle` (`id`, `person_id`, `rolle_id`) VALUES
(10, 9, 3),
(11, 9, 4),
(18, 16, 5),
(19, 17, 3);

-- --------------------------------------------------------

--
-- Table structure for table `Rolle`
--

CREATE TABLE `Rolle` (
  `id` int(11) NOT NULL,
  `rolle` enum('Deltager','Administrator','Frivillig') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Rolle`
--

INSERT INTO `Rolle` (`id`, `rolle`) VALUES
(3, 'Deltager'),
(4, 'Administrator'),
(5, 'Frivillig');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Begivenhed`
--
ALTER TABLE `Begivenhed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Person`
--
ALTER TABLE `Person`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Person_Rolle`
--
ALTER TABLE `Person_Rolle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`),
  ADD KEY `rolle_id` (`rolle_id`);

--
-- Indexes for table `Rolle`
--
ALTER TABLE `Rolle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Begivenhed`
--
ALTER TABLE `Begivenhed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `Person`
--
ALTER TABLE `Person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `Person_Rolle`
--
ALTER TABLE `Person_Rolle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `Rolle`
--
ALTER TABLE `Rolle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Person_Rolle`
--
ALTER TABLE `Person_Rolle`
  ADD CONSTRAINT `Person_Rolle_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `Person` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Person_Rolle_ibfk_2` FOREIGN KEY (`rolle_id`) REFERENCES `Rolle` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
