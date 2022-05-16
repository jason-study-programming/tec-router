#!/usr/bin/python3
# -*- coding: utf-8 -*-

'''
ZetCode Advanced PyQt4 tutorial 

In this example, we draw basic
shapes.

Author: Jan Bodnar
Website: zetcode.com 
Last edited: August 2017
'''

from PyQt5.QtWidgets import QWidget, QApplication
from PyQt5.QtGui import QPainter, QBrush, QPainterPath, QPolygon, QColor, QFont
from PyQt5.QtCore import Qt, QPoint, QPointF
import sys


class Example(QWidget):
    
    def __init__(self):
        super().__init__()

        self.initUI()
        
        
    def initUI(self):
        
        self.setGeometry(300, 300, 350, 280)
        self.setWindowTitle('Shapes')
        self.show()
        

    def paintEvent(self, event):
    
        painter = QPainter()
        painter.begin(self)
        self.drawShapes(painter)
        painter.end()
        
        
    def drawShapes(self, painter):

        painter.setRenderHint(QPainter.Antialiasing)
        painter.setPen(Qt.NoPen)
        painter.setBrush(QBrush(QColor("#888888")))

        path1 = QPainterPath()

        path1.moveTo(5, 5)
        path1.cubicTo(40, 5,  50, 50,  99, 99)
        path1.cubicTo(5, 99,  50, 50,  5, 5)
        painter.drawPath(path1)

        painter.drawPie(130, 20, 90, 60, 30*16, 120*16)
        painter.drawChord(240, 30, 90, 60, 0, 16*180)
        painter.drawRoundedRect(20, 120, 80, 50, 10, 10)

        polygon = QPolygon()
        polygon.append(QPoint(130, 140))
        polygon.append(QPoint(180, 170))
        polygon.append(QPoint(180, 140))
        polygon.append(QPoint(220, 110))
        polygon.append(QPoint(140, 100))
                
        painter.drawPolygon(polygon)

        painter.drawRect(250, 110, 60, 60)

        baseline = QPointF(20, 250)
        font = QFont("Georgia", 55)
        path2 = QPainterPath()
        path2.addText(baseline, font, "Q")
        painter.drawPath(path2)

        painter.drawEllipse(140, 200, 60, 60)
        painter.drawEllipse(240, 200, 90, 60)

    
app = QApplication([])
ex = Example()
sys.exit(app.exec_())
