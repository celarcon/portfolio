import { FC, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { VertexShader } from './shaders/Vertex'
import { FragmentShader } from './shaders/Fragment'

export const ThreeObject: FC = () => {
	const ref = useRef<HTMLInputElement>()
	const uniforms = useMemo(() => {
		return {
			u_time: { value: 0 },
			u_intensity: { value: 0.3 },
		}
	}, [])
	const object = () => {
		const geometry = new THREE.SphereGeometry(2.5, 100, 100)
		const material = new THREE.ShaderMaterial({
			vertexShader: VertexShader,
			fragmentShader: FragmentShader,
			uniforms,
		})
		return new THREE.Mesh(geometry, material)
	}

	useEffect(() => {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			ref.current.clientWidth / 300,
			0.1,
			1000,
		)
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
		renderer.setSize(ref.current.clientWidth, 300)
		const sphere = object()
		scene.add(sphere)
		ref.current.appendChild(renderer.domElement)

		camera.position.z = 5

		const animate = () => {
			const frame = requestAnimationFrame(animate)
			sphere.material.uniforms.u_time.value = 0.0008 * frame
			sphere.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
				sphere.material.uniforms.u_intensity.value,
				0.3,
				0.5,
			)
			renderer.render(scene, camera)
		}
		animate()
		const onWindowResize = () => {
			camera.aspect = ref.current.clientWidth / 300
			camera.updateProjectionMatrix()
			renderer.setSize(ref.current.clientWidth, 300)
		}

		window.addEventListener('resize', onWindowResize, false)

		return () => {
			window.removeEventListener('resize', onWindowResize, false)
		}
	}, [])

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: '300',
				zIndex: 2,
				position: 'absolute',
			}}
		/>
	)
}
