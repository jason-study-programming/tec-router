#!/usr/bin/python3
# -*- coding: utf-8 -*-

'''
ZetCode Advanced PyQt5 tutorial 

In this example, we create a  progress meter using the
GraphicsView framework.

Author: Jan Bodnar
Website: zetcode.com 
Last edited: August 2017
'''

from PyQt5.QtWidgets import (QWidget, QApplication, QGraphicsScene, 
        QGraphicsView, QGraphicsItemGroup, QGraphicsItem)
from PyQt5.QtGui import (QPainter, QColor, QPen, QBrush, 
        QRadialGradient)
from PyQt5.QtCore import (Qt, QRectF, QPointF, QTimeLine, 
        QPropertyAnimation)
import sys

class ProgressMeter(QGraphicsItem):
    
    def __init__(self, parent):
        super().__init__()
        
        self.parent = parent
        
        self.angle = 0
        self.per = 0
        
        
    def boundingRect(self):
    
        return QRectF(0, 0, self.parent.width(), 
                              self.parent.height())
        
    def increment(self):
    
        self.angle += 1
        self.per = int(self.angle / 3.6)
        
        if self.angle > 360:
            return False
        else:
            return True
            
        
    def paint(self, painter, option, widget):

        self.drawBackground(painter, widget)
        self.drawMeter(painter, widget)
        self.drawText(painter)
  
        
    def drawBackground(self, painter, widget):
    
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setPen(Qt.NoPen)
        
        p1 = QPointF(80, 80)
        g = QRadialGradient(p1*0.2, 80*1.1)

        g.setColorAt(0.0, widget.palette().light().color())
        g.setColorAt(1.0, widget.palette().dark().color())
        painter.setBrush(g)
        painter.drawEllipse(0, 0, 80, 80)
        
        p2 = QPointF(40, 40)
        g = QRadialGradient(p2, 70*1.3)

        g.setColorAt(0.0, widget.palette().midlight().color())
        g.setColorAt(1.0, widget.palette().dark().color())
        painter.setBrush(g)
        painter.drawEllipse(7.5, 7.5, 65, 65)
        
        
    def drawMeter(self, painter, widget):
    
        painter.setPen(Qt.NoPen)
        painter.setBrush(widget.palette().highlight().color())
        painter.drawPie(7.5, 7.5, 65, 65, 0, -self.angle*16)
               
        
    def drawText(self, painter):
    
        text = "%d%%" % self.per
        
        font = painter.font()
        font.setPixelSize(11)
        painter.setFont(font)
        brush = QBrush(QColor("#000000"))
        pen = QPen(brush, 1)
        painter.setPen(pen)
        #size = painter.fontMetrics().size(Qt.TextSingleLine, text)
        painter.drawText(0, 0, 80, 80, Qt.AlignCenter, text)
    

class MyView(QGraphicsView):
    
    def __init__(self):
        super().__init__()
        
        self.initView()
        self.setupScene()
        self.setupAnimation()
        
        self.setGeometry(300, 150, 250, 250)
        
        
    def initView(self):
    
        self.setWindowTitle("Progress meter")
        self.setRenderHint(QPainter.Antialiasing)
        
        policy = Qt.ScrollBarAlwaysOff
        self.setVerticalScrollBarPolicy(policy)
        self.setHorizontalScrollBarPolicy(policy)
        
        self.setBackgroundBrush(self.palette().window())
        
        self.pm = ProgressMeter(self)
        self.pm.setPos(55, 55)
    
        
    def setupScene(self):
    
        self.scene = QGraphicsScene(self)
        self.scene.setSceneRect(0, 0, 250, 250)
        self.scene.addItem(self.pm)
        
        self.setScene(self.scene)

        
    def setupAnimation(self):

        self.timer = QTimeLine()
        self.timer.setLoopCount(0)
        self.timer.setFrameRange(0, 100)
        
        self.timer.frameChanged[int].connect(self.doStep)               
        self.timer.start()
        
        
    def doStep(self, i):
        
        if not self.pm.increment():
            self.timer.stop()
            
        self.pm.update()
          
        
app = QApplication([])
view = MyView()
view.show()
sys.exit(app.exec_())
